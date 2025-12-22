const Recognition = () => {
  return (
    <section className="w-screen h-screen flex flex-col justify-center gap-8">
      <h1>
        <span className="mr-2">/</span>Industry Recognition
      </h1>
      <h2 className="text-4xl">
        Nominated as Agency of
        <br /> the Year amongst best
        <br /> Digital Agencies
        <br /> Worldwide.
      </h2>
      <div className="flex gap-40">
        <p className="w-1/3">
          We're passionate about doing the best digital innovation we can and
          pushing new technology to its limits. And we achieve results we're
          proud of.
        </p>
        <div className="flex items-end">
          <img
            src="/images/awards/agency-of-the-year.png"
            alt="agency of the year"
            className="invert w-24 h-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Recognition;
