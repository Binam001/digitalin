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
      <div className="">
        <header className="relative z-10 h-[70vh] flex items-center justify-center bg-background">
          <img
            src={blog.image}
            alt={blog.title}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 w-full h-full bg-linear-to-b from-black/30 to-black"></div>
        </header>
      </div>
      <section className="mt-16">
        <main className="">
          <div className="flex justify-between">
            <article className="">
              <header className="mb-4 space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <Icon icon="uil:calender" />
                    <p className="text-xs">Dec 10, 2025</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon icon="icon-park-outline:time" />
                    <p className="text-xs">5 min</p>
                  </div>
                </div>
                <h1 className="text-5xl text-primary font-[Poppins-ExtraBold] uppercase">
                  {blog.title}
                </h1>
              </header>
              {/* <figure className="my-8">
                <img
                  src={blog.image}
                  alt={`Image for ${blog.title}`}
                  className="w-1/2 rounded-lg object-cover"
                />
              </figure> */}
              <div className="space-y-4 text-lg">
                <p className="">{blog.desc}</p>
                <p className="text-xl font-semibold text-primary">
                  {blog.descTitle1}
                </p>
                <p className="">{blog.desc1}</p>
                <p className="text-xl font-semibold text-primary">
                  {blog.descTitle2}
                </p>
                <p className="">{blog.desc2}</p>
                <p className="text-xl font-semibold text-primary">
                  {blog.descTitle3}
                </p>
                <p className="">{blog.desc3}</p>
              </div>
            </article>
          </div>
        </main>

        {/* Other Articles Section */}
        <aside aria-label="Related Blogs" className="py-8 lg:py-16">
          <div className="space-y-4">
            <p className="text-5xl text-primary font-[Poppins-ExtraBold] uppercase">
              Other Blogs
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {otherBlogs.map((otherBlog) => (
                <Link
                  key={otherBlog.slug}
                  href={`/blog/${otherBlog.slug}`}
                  className="border border-foreground/30 p-4 rounded-lg flex flex-col justify-between gap-2 group hover:border-primary/30 transition-all duration-300"
                >
                  <div className="">
                    <p className="group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {otherBlog.title}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs text-foreground/50">5m read time</p>
                    <img
                      src={otherBlog.image}
                      alt={otherBlog.title}
                      className="h-36 object-cover rounded-md group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>
                  <div className="flex justify-between text-foreground/70">
                    <div className="flex items-center gap-1">
                      <Icon icon="mdi:eye-outline" className="size-5" />
                      <span className="text-xs">4M</span>
                    </div>
                    <Icon icon="mdi:share" className="size-6" />
                  </div>
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
