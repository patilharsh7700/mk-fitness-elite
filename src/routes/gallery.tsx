import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/ui-bits";
import { Gallery } from "@/components/sections/Gallery";
import { CTA } from "@/components/sections/CTA";
import crossfit from "@/assets/crossfit.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gym Gallery | M.K Fitness Club Punawale & Marunji" },
      {
        name: "description",
        content:
          "Photos of the M.K Fitness Club gym floor, cardio zone, strength machines, CrossFit area and yoga hall in Punawale and Marunji, Pune.",
      },
      { property: "og:title", content: "Gym Gallery | M.K Fitness Club Pune" },
      {
        property: "og:description",
        content: "See the equipment, the floors and the atmosphere before you visit.",
      },
    ],
  }),
  component: () => (
    <Layout>
      <PageHero
        title="GALLERY"
        subtitle="Machines, floors, yoga hall and the people who train here."
        image={crossfit}
      />
      <Gallery />
      <CTA />
    </Layout>
  ),
});