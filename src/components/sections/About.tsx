import { Check } from "lucide-react";
import interior from "@/assets/interior.jpg";
import { SectionHeading } from "@/components/site/ui-bits";
import { WHY_US } from "@/data/site";

// Import all images from src/assets/
import trainersImg from "@/assets/trainers.jpg";
import equipmentImg from "@/assets/equipment.jpg";
import yogaHallImg from "@/assets/yoga-hall.jpg";
import strengthImg from "@/assets/strength-training.jpg";
import cardioImg from "@/assets/cardio-zone.jpg";
import functionalImg from "@/assets/functional-training.jpg";
import personalTrainingImg from "@/assets/personal-training.jpg";
import nutritionImg from "@/assets/nutrition-guidance.jpg";
import friendlyImg from "@/assets/friendly-environment.jpg";
import affordableImg from "@/assets/affordable-membership.jpg";

// Map each WHY_US item to its image
const imageMap: Record<string, string> = {
  "Certified Trainers": trainersImg,
  "Modern Equipment": equipmentImg,
  "Separate Yoga Hall": yogaHallImg,
  "Strength Training": strengthImg,
  "Cardio Zone": cardioImg,
  "Functional Training": functionalImg,
  "Personal Training": personalTrainingImg,
  "Nutrition Guidance": nutritionImg,
  "Friendly Environment": friendlyImg,
  "Affordable Membership": affordableImg,
};

export function About() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          eyebrow="About the club"
          title={
            <>
              WHY CHOOSE <span className="text-gradient">M.K FITNESS CLUB</span>
            </>
          }
          subtitle="Two premium branches in Pune built around one idea — serious training in a place you actually enjoy walking into."
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          {/* Left side - Main Image */}
          <div data-reveal="left" className="group relative overflow-hidden rounded-[2rem]">
            <img
              src={interior}
              alt="Modern equipment floor at M.K Fitness Club"
              loading="lazy"
              width={1440}
              height={960}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="glass absolute bottom-6 left-6 rounded-2xl px-6 py-4">
              <span className="font-display text-4xl text-primary">10+</span>
              <span className="ml-2 text-sm uppercase tracking-widest text-muted-foreground">
                Years of coaching
              </span>
            </div>
          </div>

          {/* Right side - Grid with images */}
          <div data-reveal="right" className="grid gap-3 sm:grid-cols-2">
            {WHY_US.map((item, i) => (
              <div
                key={item}
                className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ ["--reveal-delay" as string]: `${i * 40}ms` }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={imageMap[item]}
                    alt={item}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-300" />
                </div>
                
                {/* Content */}
                <div className="relative flex items-center gap-3 px-5 py-4 min-h-[80px]">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary/20 backdrop-blur-sm text-primary">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-semibold text-white drop-shadow-lg">
                    {item}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
