import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/ui-bits";
import { About } from "@/components/sections/About";
import { Features } from "@/components/sections/Features";
import { Stats } from "@/components/sections/Stats";
import { CTA } from "@/components/sections/CTA";
import interior from "@/assets/interior.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About M.K Fitness Club | Fitness Club in Pune" },
      {
        name: "description",
        content:
          "Learn why 350+ members train at M.K Fitness Club — certified trainers, modern machines, separate yoga hall and a friendly environment in Punawale & Marunji.",
      },
      { property: "og:title", content: "About M.K Fitness Club | Fitness Club in Pune" },
      {
        property: "og:description",
        content: "Certified trainers, modern equipment and an environment built for results.",
      },
    ],
  }),
  component: () => (
    <Layout>
      <PageHero
        title="ABOUT THE CLUB"
        subtitle="A premium fitness club built in Pune for people who take their training seriously."
        image={interior}
      />
      <Stats />
      <About />
      <Features />
      <CTA />
    </Layout>
  ),
});