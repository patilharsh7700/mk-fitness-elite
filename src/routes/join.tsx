import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/ui-bits";
import { Membership } from "@/components/sections/Membership";
import { ContactSection } from "@/components/sections/ContactSection";
import { Stats } from "@/components/sections/Stats";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Join Now | Weight Loss & Muscle Building Gym in Pune" },
      {
        name: "description",
        content:
          "Join M.K Fitness Club today — weight loss and muscle building programs, certified trainers and flexible memberships in Punawale & Marunji, Pune.",
      },
      { property: "og:title", content: "Join M.K Fitness Club | Gym in Punawale & Marunji" },
      { property: "og:description", content: "Start today. Certified trainers, modern equipment, real results." },
    ],
  }),
  component: () => (
    <Layout>
      <PageHero
        title="JOIN NOW"
        subtitle="Fill the form or call us — we'll set up your free trial session and body assessment."
        image={hero}
      />
      <Stats />
      <ContactSection heading={false} />
      <Membership />
    </Layout>
  ),
});