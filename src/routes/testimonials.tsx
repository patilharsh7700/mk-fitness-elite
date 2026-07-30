import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/ui-bits";
import { Reviews } from "@/components/sections/Reviews";
import { Transformation } from "@/components/sections/Transformation";
import { Stats } from "@/components/sections/Stats";
import { CTA } from "@/components/sections/CTA";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Member Reviews & Transformations | M.K Fitness Club" },
      {
        name: "description",
        content:
          "Rated 4.6★ on Google by 348+ members. Read reviews and see weight loss and muscle gain transformations from M.K Fitness Club Pune.",
      },
      { property: "og:title", content: "Member Reviews & Transformations | M.K Fitness Club" },
      { property: "og:description", content: "4.6★ on Google across our Punawale and Marunji branches." },
    ],
  }),
  component: () => (
    <Layout>
      <PageHero
        title="TESTIMONIALS"
        subtitle="What our members say — and what they achieved."
        image={hero}
      />
      <Stats />
      <Reviews />
      <Transformation />
      <CTA />
    </Layout>
  ),
});