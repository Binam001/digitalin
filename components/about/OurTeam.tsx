import { ArrowUpRight } from "lucide-react";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";

const teamMembers = [
  {
    name: "Rajesh Shrestha",
    role: "Creative Director",
    image: team1,
  },
  {
    name: "Priya Gurung",
    role: "Head of Strategy",
    image: team2,
  },
  {
    name: "Bikram Thapa",
    role: "Managing Director",
    image: team3,
  },
  {
    name: "Srijana Maharjan",
    role: "Art Director",
    image: team4,
  },
];

const TeamSection = () => {
  return (
    <section className="py-24 lg:py-40 bg-background noise">
      <div className="container">
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-4">
            <span className="text-primary font-body text-sm tracking-[0.3em] uppercase">
              04 / The Team
            </span>
          </div>
          <div className="lg:col-span-8">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display text-foreground leading-[0.9]">
              THE FACES
              <span className="block text-stroke">BEHIND THE</span>
              <span className="text-primary">PIXELS</span>
            </h2>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-background group relative overflow-hidden"
            >
              {/* Image */}
              <div className="aspect-[3/4] overflow-hidden">
                {/* <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                /> */}
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-primary font-body text-xs tracking-[0.2em] uppercase mb-1">
                      {member.role}
                    </p>
                    <h3 className="text-2xl font-display text-foreground">
                      {member.name}
                    </h3>
                  </div>
                  <div className="w-10 h-10 border border-foreground/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                    <ArrowUpRight className="w-4 h-4 text-foreground group-hover:text-primary-foreground transition-colors duration-500" />
                  </div>
                </div>
              </div>

              {/* Number */}
              <span className="absolute top-6 left-6 text-7xl font-display text-foreground/5 group-hover:text-primary/20 transition-colors duration-500">
                0{index + 1}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-8 p-8 border border-border">
          <div>
            <h3 className="font-display text-3xl text-foreground mb-2">
              JOIN THE CREW
            </h3>
            <p className="text-muted-foreground font-body">
              We're always looking for creative troublemakers.
            </p>
          </div>
          <button className="group flex items-center gap-4 px-8 py-4 bg-primary text-primary-foreground font-display text-xl tracking-wider hover:bg-foreground transition-colors duration-500">
            VIEW CAREERS
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
