import React from "react";
import { SectionProps } from "./types";

function NewsSection({ state }: SectionProps) {
  const news = [
    {
      date: "2020-04-29",
      text: "BGP++ has completed development on DeepCue!",
      title: "DeepCue Completed"
    },
    {
      date: "2020-04-17",
      text: "BGP++ has completed development on the advice learning.",
      title: "Advice Learning Completed"
    },
    {
      date: "2020-03-10",
      text: "BGP++ has completed development on the user interface.",
      title: "User Interface Completed"
    },
    {
      date: "2019-12-06",
      text: "BGP++ has completed a prototype of the user interface.",
      title: "User Interface Prototype Completed"
    },
    {
      date: "2019-11-30",
      text: "BGP++ has completed development on the reinforcement learning.",
      title: "Reinforcement Learning Completed"
    }
  ];
  const elements = news.map(({ date, text, title }, index) => (
    <div className="news-container" key={index}>
      <h3 className="news-title">{`${date} - ${title}`}</h3>
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
