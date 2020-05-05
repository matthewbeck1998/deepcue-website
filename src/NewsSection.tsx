import React from "react";
import { SectionProps } from "./types";

function NewsSection({ state }: SectionProps) {
  const news = [
    {
      title: "DeepCue Completed",
      text: "BGP++ has completed development on DeepCue!"
    },
    {
      title: "User Interface Completed",
      text: "BGP++ has completed development on the user interface."
    },
    {
      title: "Advice Learning Completed",
      text: "BGP++ has completed development on the advice learning."
    },
    {
      title: "User Interface Prototype Completed",
      text: "BGP++ has completed a prototype of the user interface."
    },
    {
      title: "Reinforcement Learning Completed",
      text: "BGP++ has completed development on the reinforcement learning."
    }
  ];
  const elements = news.map(({ title, text }, index) => (
    <div className="news-container" key={index}>
      <h3 className="news-title">{title}</h3>
      <span className="news-text">{text}</span>
    </div>
  ));

  return (
    <section
      className={
        state.currentSection === "NEWS_SECTION" ? "section" : "section hidden"
      }
      id="news-section"
    >
      {elements}
    </section>
  );
}

export default NewsSection;
