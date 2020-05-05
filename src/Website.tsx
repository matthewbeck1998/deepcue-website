import React from "react";
import "./Website.css";

import Header from "./Header";
import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";
import TeamSection from "./TeamSection";
import ResourcesSection from "./ResourcesSection";
import NewsSection from "./NewsSection";

import { initialState, reducer } from "./reducer";

function Website() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <div className="website">
      <Header dispatch={dispatch} />
      <HomeSection state={state} />
      <AboutSection state={state} />
      <TeamSection state={state} />
      <ResourcesSection state={state} />
      <NewsSection state={state} />
    </div>
  );
}

export default Website;
