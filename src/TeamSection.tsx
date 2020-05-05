import React from "react";
import { SectionProps } from "./types";

function TeamSection({ state }: SectionProps) {
  return (
    <section
      className={
        state.currentSection === "TEAM_SECTION" ? "section" : "section hidden"
      }
    >
      TeamSection
    </section>
  );
}

export default TeamSection;
