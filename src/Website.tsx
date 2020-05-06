import React from "react";
import "./Website.css";

import Header from "./Header";
import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";
import TeamSection from "./TeamSection";
import ResourcesSection from "./ResourcesSection";
import NewsSection from "./NewsSection";

import { initialState, reducer } from "./reducer";
import { State } from "./types";

function getCurrentSection({ currentSection }: State) {
  switch (currentSection) {
    case "HOME_SECTION":
      return <HomeSection />;
    case "ABOUT_SECTION":
      return <AboutSection />;
    case "TEAM_SECTION":
      return <TeamSection />;
    case "RESOURCES_SECTION":
      return <ResourcesSection />;
    case "NEWS_SECTION":
      return <NewsSection />;
  }
}

function Website() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const currentSection = getCurrentSection(state);

  return (
    <div className="website">
      <Header dispatch={dispatch} />
      {currentSection}
    </div>
  );
}

export default Website;
