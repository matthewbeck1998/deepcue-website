import React from "react";
import { SectionProps } from "./types";

function AboutSection({ state }: SectionProps) {
  return (
    <section
      className={
        state.currentSection === "ABOUT_SECTION" ? "section" : "section hidden"
      }
    >
      AboutSection
    </section>
  );
}

export default AboutSection;
