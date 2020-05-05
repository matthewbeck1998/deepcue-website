import React from "react";
import "./Website.css";

import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";
import TeamSection from "./TeamSection";
import Resources from "./ResourcesSection";
import Articles from "./ArticlesSection";

function Website() {
  return (
    <div className="website">
      <HomeSection />
      <AboutSection />
      <TeamSection />
      <Resources />
      <Articles />
    </div>
  );
}

export default Website;
