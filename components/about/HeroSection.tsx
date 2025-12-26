import BgBubble from "../BgBubble";
import HoverText from "../HoverText";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-background relative overflow-hidden w-screen px-0">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-1/2">
        <video
          src="/videos/about/jelly.mp4"
          className="h-full w-full"
          autoPlay
          loop
          muted
        />
      </div>
      <header className="relative z-10 h-screen flex items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center gap-8">
          <h1 className="text-5xl font-[Poppins-ExtraBold] uppercase text-primary">
            The <span className="text-foreground">Minds Behind</span> the Work
          </h1>
          <p className="text-lg text-foreground w-1/3 mx-auto text-center">
            We're a team of creators, strategists, and marketers shaping brands
            with purpose and impact.
          </p>
        </div>
      </header>
    </section>
  );
};

export default HeroSection;
