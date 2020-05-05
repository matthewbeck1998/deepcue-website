import React from "react";
import "./Website.css";

import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";
import TeamSection from "./TeamSection";
import ResourcesSection from "./ResourcesSection";
import ArticlesSection from "./ArticlesSection";

function Website() {
  return (
    <div className="website">
      <HomeSection />
      <AboutSection />
      <TeamSection />
      <ResourcesSection />
      <ArticlesSection/>
    </div>
  );
}

export default Website;
