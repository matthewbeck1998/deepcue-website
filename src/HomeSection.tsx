import React from "react";
import { SectionProps } from "./types";

function HomeSection({ state }: SectionProps) {
  return (
    <section
      className={
        state.currentSection === "HOME_SECTION" ? "section" : "section hidden"
      }
      id="home-section"
    >
      <div className="home-container">
        <div className="intro">
          <h2>DeepCue</h2>
          <span>CS 426 - Senior Projects in Computer Science</span>
          <span>Department of Computer Science and Engineering</span>
          <span>University of Nevada, Reno</span>
          <span>Spring 2020</span>
          <span>Team #1 - BGP++</span>
        </div>
      </div>
      <div className="home-container">
        <img
          alt="DeepCue user interface"
          className="image"
          src="https://drive.google.com/uc?id=1LIg3n8QVVO_Typ5t9U4d4cGXdiUnCDll"
        ></img>
      </div>
      <div className="home-container">
        <p className="abstract">
          DeepCue uses a deep Q-learning algorithm to initially learn how to
          play a game then uses a convolutional neural network to incorporate
          user guidance in the form of game inputs into the learning process.
        </p>
      </div>
      <div className="home-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/C8_xEUezvII"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="DeepCue Video"
        ></iframe>
      </div>
    </section>
  );
}

export default HomeSection;
