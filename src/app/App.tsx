import React from "react";
import { Toaster } from "sonner";
import { Navbar } from "@/app/components/Navbar";
import { Hero } from "@/app/components/Hero";
import { SocialProof } from "@/app/components/SocialProof";
import { Problem } from "@/app/components/Problem";
import { Solution } from "@/app/components/Solution";
import { HowItWorks } from "@/app/components/HowItWorks";
import { DetailedFeatures } from "@/app/components/DetailedFeatures";
import { Pricing } from "@/app/components/Pricing";
import { FAQ } from "@/app/components/FAQ";
import { FinalCTA } from "@/app/components/FinalCTA";
import { Footer } from "@/app/components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-violet-100 selection:text-violet-900">
      <Toaster position="top-center" />
      <Navbar />
      
      <main>
        <Hero />
        <SocialProof />
        <Problem />
        <Solution />
        <HowItWorks />
        <DetailedFeatures />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
};

export default App;
