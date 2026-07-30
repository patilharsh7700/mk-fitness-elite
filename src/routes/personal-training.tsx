import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/ui-bits";
import { PersonalTraining } from "@/components/sections/PersonalTraining";
import { Transformation } from "@/components/sections/Transformation";
import { Trainers } from "@/components/sections/Trainers";
import { CTA } from "@/components/sections/CTA";
import training from "@/assets/training.jpg";

export const Route = createFileRoute("/personal-training")({
  head: () => ({
    meta: [
      { title: "Personal Trainer in Pune | M.K Fitness Club" },
      {
        name: "description",
        content:
          "Personal training at M.K Fitness Club Punawale & Marunji — fat loss, muscle gain, strength, customized workout and diet plans from certified personal trainers in Pune.",
      },
      { property: "og:title", content: "Personal Trainer in Pune | M.K Fitness Club" },
      {
        property: "og:description",
        content: "Customized workout and diet coaching for fat loss, muscle gain and strength.",
      },
    ],
  }),
  component: () => (
    <Layout>
      <PageHero
        title="PERSONAL TRAINING"
        subtitle="A dedicated coach, a plan built around your body, and weekly accountability."
        image={training}
      />
      <PersonalTraining />
      <Transformation />
      <Trainers />
      <CTA />
    </Layout>
  ),
});