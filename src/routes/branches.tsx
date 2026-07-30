import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/ui-bits";
import { BranchesSection } from "@/components/sections/BranchesSection";
import { CTA } from "@/components/sections/CTA";
import interior from "@/assets/interior.jpg";

export const Route = createFileRoute("/branches")({
  head: () => ({
    meta: [
      { title: "Gym Near Hinjawadi | Punawale & Marunji Branches" },
      {
        name: "description",
        content:
          "M.K Fitness Club branches: Punawale (Kate Wasti, near Mumbai Pune Highway, open 24 hours) and Marunji (Hinjawadi Kasarsai Road, 6 AM to 11 PM).",
      },
      { property: "og:title", content: "Gym Near Hinjawadi | M.K Fitness Club Branches" },
      {
        property: "og:description",
        content: "Two premium branches in Pune — Punawale and Marunji.",
      },
    ],
  }),
  component: () => (
    <Layout>
      <PageHero
        title="OUR BRANCHES"
        subtitle="Punawale and Marunji — both minutes from Hinjawadi IT Park."
        image={interior}
      />
      <BranchesSection withMaps />
      <CTA />
    </Layout>
  ),
});