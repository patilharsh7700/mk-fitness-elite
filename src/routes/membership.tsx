import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/ui-bits";
import { Membership } from "@/components/sections/Membership";
import { Reviews } from "@/components/sections/Reviews";
import { CTA } from "@/components/sections/CTA";
import cardio from "@/assets/cardio.jpg";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Gym Membership Plans | M.K Fitness Club Pune" },
      {
        name: "description",
        content:
          "Basic, Standard and Premium gym membership plans at M.K Fitness Club Punawale & Marunji — gym access, cardio, strength, locker, trainer support and diet guidance.",
      },
      { property: "og:title", content: "Gym Membership Plans | M.K Fitness Club Pune" },
      {
        property: "og:description",
        content: "Flexible membership plans with trainer support and diet guidance.",
      },
    ],
  }),
  component: () => (
    <Layout>
      <PageHero
        title="MEMBERSHIP PLANS"
        subtitle="Pick the plan that matches your goal. Walk in at either branch for the current offer."
        image={cardio}
      />
      <Membership />
      <Reviews />
      <CTA />
    </Layout>
  ),
});