import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Features } from "@/components/sections/Features";
import { Stats } from "@/components/sections/Stats";
import { Membership } from "@/components/sections/Membership";
import { PersonalTraining } from "@/components/sections/PersonalTraining";
import { Gallery } from "@/components/sections/Gallery";
import { BranchesSection } from "@/components/sections/BranchesSection";
import { Trainers } from "@/components/sections/Trainers";
import { Transformation } from "@/components/sections/Transformation";
import { Reviews } from "@/components/sections/Reviews";
import { CTA } from "@/components/sections/CTA";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "M.K Fitness Club",
  description:
    "Premium gym in Punawale and Marunji, Pune with certified trainers, modern equipment, yoga hall and personal training.",
  telephone: "+918698967644",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.6", reviewCount: "348" },
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Kate Wasti, Near Mumbai Pune Highway",
      addressLocality: "Punawale, Pune",
      addressCountry: "IN",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Front of Motherson Sony Company, Hinjawadi Kasarsai Road",
      addressLocality: "Marunji, Pune",
      addressCountry: "IN",
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gym in Punawale & Marunji | M.K Fitness Club Pune" },
      {
        name: "description",
        content:
          "M.K Fitness Club is a premium gym in Punawale & Marunji near Hinjawadi, Pune. 24 hour gym, certified trainers, yoga hall, cardio zone and personal training.",
      },
      { property: "og:title", content: "Gym in Punawale & Marunji | M.K Fitness Club Pune" },
      {
        property: "og:description",
        content:
          "Transform your body, build your confidence. Certified trainers, modern equipment and personal training in Pune.",
      },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Index,
});

function Index() {
  return (
    <Layout>
      <Hero />
      <Stats />
      <About />
      <Features />
      <Membership />
      <PersonalTraining />
      <Gallery />
      <BranchesSection />
      <Trainers />
      <Transformation />
      <Reviews />
      <CTA />
    </Layout>
  );
}
