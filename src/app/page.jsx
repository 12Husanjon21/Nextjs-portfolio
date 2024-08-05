"use client";
import { TypeAnimation } from "react-type-animation";
import AchievementsSection from "@/app/componets/AchievmentSections";
import About from "@/app/componets/About";
import Navbar from "./componets/NavBar";
import HeroSection from "./componets/HeroSection";
import ProjectsSection from "./componets/ProjectsSection";

export default function Home() {
  return (
    <>
      <main className="flex flex-col min-h-screen bg-[#121212]">
        <Navbar />
        <section className="container mt-24 mx-auto px-12 py-4">
          <HeroSection />
        </section>

        <AchievementsSection className="mb-40" />

        <About />

        <ProjectsSection />
      </main>
    </>
  );
}
