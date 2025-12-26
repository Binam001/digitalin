import { teamMemberLists } from "@/constants";
import { ArrowUpRight } from "lucide-react";
import HoverText from "../HoverText";

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
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display text-foreground leading-[0.9]">
              <HoverText text="THE FACES" />
              <span className="block text-stroke">BEHIND OUR</span>
              <HoverText text="SUCCESS" className="text-primary" />
            </h2>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {teamMemberLists.map((member) => (
            <div
              key={member.id}
              className="bg-background group relative overflow-hidden space-y-2"
            >
              {/* Image */}
              <div className="aspect-3/4 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 rounded-lg"
                />
              </div>

              {/* <div className="">
                <p className="text-xl">{member.name}</p>
              </div> */}
              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-2xl font-display text-foreground">
                      {member.name}
                    </h3>
                  </div>
                  {/* <div className="w-10 h-10 border border-foreground/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                    <ArrowUpRight className="w-4 h-4 text-foreground group-hover:text-primary-foreground transition-colors duration-500" />
                  </div> */}
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
