import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/ui-bits";
import { Trainers } from "@/components/sections/Trainers";
import { Transformation } from "@/components/sections/Transformation";
import { CTA } from "@/components/sections/CTA";
import trainer3 from "@/assets/trainer3.jpg";

export const Route = createFileRoute("/trainers")({
  head: () => ({
    meta: [
      { title: "Certified Trainers | M.K Fitness Club Pune" },
      {
        name: "description",
        content:
          "Meet the certified trainers at M.K Fitness Club Punawale & Marunji — specialists in strength, fat loss, functional training and body transformation.",
      },
      { property: "og:title", content: "Certified Trainers | M.K Fitness Club Pune" },
      {
        property: "og:description",
        content: "Coaches who know form, nutrition and how to keep you consistent.",
      },
    ],
  }),
  component: () => (
    <Layout>
      <PageHero
        title="OUR TRAINERS"
        subtitle="15+ certified coaches across strength, cardio, functional and yoga."
        image={trainer3}
      />
      <Trainers />
      <Transformation />
      <CTA />
    </Layout>
  ),
});