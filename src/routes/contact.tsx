import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/ui-bits";
import { ContactSection } from "@/components/sections/ContactSection";
import { BranchesSection } from "@/components/sections/BranchesSection";
import yoga from "@/assets/yoga.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact M.K Fitness Club | Gym Near Me in Pune" },
      {
        name: "description",
        content:
          "Contact M.K Fitness Club — call 8698967644 or 9689167644, WhatsApp us, or visit our Punawale and Marunji gyms in Pune.",
      },
      { property: "og:title", content: "Contact M.K Fitness Club | Gym in Pune" },
      { property: "og:description", content: "Call, WhatsApp or send us an enquiry — we reply fast." },
    ],
  }),
  component: () => (
    <Layout>
      <PageHero
        title="CONTACT US"
        subtitle="Questions about plans, timings or personal training? Talk to us."
        image={yoga}
      />
      <ContactSection />
      <BranchesSection withMaps />
    </Layout>
  ),
});