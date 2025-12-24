import BgBubble from "@/components/BgBubble";
// import HeroSection from "@/components/blog/HeroSection";
import HoverText from "@/components/HoverText";
import { blogLists } from "@/constants";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const blog = blogLists.find((p) => p.slug === slug);

  if (!blog) return notFound();

  const numOfArticles = blogLists.length - 1;
  const otherBlogs = blogLists
    .filter((p) => p.slug !== slug)
    .slice(0, numOfArticles);

  return (
    <>
      <section className="">
        <header className="relative z-10 h-screen flex items-center justify-center bg-background">
          <BgBubble />
          <div className="w-full flex flex-col items-center justify-center gap-8">
            <HoverText
              text="Insights That Inspire"
              type="title"
              className="flex justify-center"
            />
            <p className="text-lg uppercase tracking-[0.3em] text-foreground/60 w-[70%] text-center">
              Stories, tips, and trends shaping modern advertising.
            </p>
            <div className="">
              <Link href="/blog">Blog</Link>
              <span className="mr-2">/</span>
              <span className="text-primary">{blog.title}</span>
            </div>
          </div>
        </header>
      </section>
      <section className="mt-16">
        <main className="px-4 md:px-8 lg:px-16">
          <div className="flex justify-between">
            <article className="">
              <header className="mb-4 lg:mb-6">
                <HoverText text={blog.title} type="title" />
              </header>
              <figure className="my-8">
                <img
                  src={blog.image}
                  alt={`Image for ${blog.title}`}
                  className="w-1/2 rounded-lg object-cover"
                />
              </figure>
              <div className="space-y-4 text-lg">
                <p className="">{blog.desc}</p>
                <p className="text-xl font-semibold">{blog.descTitle1}</p>
                <p className="">{blog.desc1}</p>
                <p className="text-xl font-semibold">{blog.descTitle2}</p>
                <p className="">{blog.desc2}</p>
                <p className="text-xl font-semibold">{blog.descTitle3}</p>
                <p className="">{blog.desc3}</p>
              </div>
            </article>
          </div>
        </main>

        {/* Other Articles Section */}
        <aside aria-label="Related Blogs" className="py-8 lg:py-16">
          <div className="space-y-4">
            <HoverText text="Other Blogs" type="title" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {otherBlogs.map((otherBlog) => (
                <Link
                  key={otherBlog.slug}
                  href={`/blog/${otherBlog.slug}`}
                  className="group h-80 cursor-pointer relative overflow-hidden rounded-lg"
                >
                  <article className="relative h-full">
                    <div className="absolute inset-0 w-full h-full bg-linear-to-b from-black/70 via-transparent to-black/70 hover:bg-black/30 duration-300 transition-colors" />
                    <div className="absolute right-3 top-3">
                      <Icon
                        icon="solar:arrow-right-up-outline"
                        className="size-8 text-black group-hover:size-9 transition-all duration-300 ease-in-out bg-gray-300 rounded-full p-1"
                      />
                    </div>
                    <img
                      src={otherBlog.image}
                      alt={otherBlog.title}
                      className="gallery-article w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 flex items-end text-white text-lg font-medium">
                      {otherBlog.title}
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}

// This function helps Next.js know which slugs exist at build time for static generation.
export async function generateStaticParams() {
  return blogLists.map((blog) => ({
    slug: blog.slug,
  }));
}
