import React from "react";
import HeroSection from "../../components/home/HeroSection";
import PricingContactSection from "../../components/home/PricingContactSection";
import TestimonialsSection from "../../components/home/TestimonialsSection";
import FeaturesSection from "../../components/home/FeaturesSection";
import ServicesSection from "../../components/home/ServicesSection";
import CountUpSection from "../../components/home/CountUpSection";
import FAQSection from "../../components/home/FaqSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CountUpSection />
      {/* <PricingContactSection /> */}
      <FAQSection />
    </>
  );
}
