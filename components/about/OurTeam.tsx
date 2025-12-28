import { teamMemberLists } from "@/constants";

const OurTeam = () => {
  return (
    <section className="py-8">
      <div className="">
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-4">
            <span className="text-primary font-body text-sm tracking-[0.3em] uppercase">
              04 / The Team
            </span>
          </div>
          <div className="lg:col-span-8">
            <h2 className="text-3xl md:text-5xl lg:text-7xl text-foreground lg:leading-[0.9]">
              <p>
                THE <span className="text-primary">FACES</span>
              </p>
              <p>
                BEHIND OUR <span className="text-primary">SUCCESS</span>
              </p>
            </h2>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-4">
          {teamMemberLists.map((member) => (
            <div
              key={member.id}
              className="bg-background group relative overflow-hidden"
            >
              {/* Image */}
              <div className="aspect-3/4 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 rounded-lg"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Info */}
              <div className="absolute bottom-0 left-0 p-2 lg:p-6 lg:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-end justify-between">
                  <h3 className="text-sm lg:text-2xl text-foreground">
                    {member.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
