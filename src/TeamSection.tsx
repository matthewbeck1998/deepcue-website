import React from "react";
import { SectionProps } from "./types";

function TeamSection({ state }: SectionProps) {
  return (
    <section
      className={
        state.currentSection === "TEAM_SECTION" ? "section" : "section hidden"
      }
      id={"team-section"}
    >
        <div className="team-card">
            <img src="https://drive.google.com/uc?id=1al8XRmzQMYRHMO9DZVY2hX8bY5ZUKcXu" alt="Matt" className={"team-card-image"}/>
            <h1>Matt Beck</h1>
            <p className="team-card-title">Senior in CSE at UNR</p>
            <p className="team-card-description">
                Matt currently works as a software development intern at AVA Logistics. At his internship, Matt works to replace legacy code on both the front-end and back-end of his company’s proprietary software, using technologies such as React TypeScript and Clojure to do so. Matt helped develop the application’s graphical user interface and assisted with the machine learning algorithm.
            </p>
        </div>

        <div className="team-card">
            <img src="https://drive.google.com/uc?id=1oH-ywOaV_J3H02wouFWYURoKSmIOuRrF" alt="Will" className={"team-card-image"}/>
            <h1>Will Garner</h1>
            <p className="team-card-title">Senior in CSE at UNR</p>
            <p className="team-card-description">
                Will is currently a software development intern at Talage. In his internship he works on full stack development using Vue and Bootstrap for frontend development and Node.js for backend development. Will took Dr. Hand’s Machine Learning class in the Fall of 2018. Will worked on both the machine learning algorithm and the GUI for user interaction.
            </p>
        </div>

        <div className="team-card">
            <img src="https://drive.google.com/uc?id=1Z4GztOv1bh9obD1V6luxEh_pxq3_tUXC" alt="Price" className={"team-card-image"}/>
            <h1>Price Poston</h1>
            <p className="team-card-title">Senior in CSE at UNR</p>
            <p className="team-card-description">
                Price was a full stack developer using Clojurescript, Typescript, and React for frontend development and Clojure for backend development at his AVA Logistics internship. Price took Dr. Hand’s Machine Learning class in the Fall of 2019. Price worked on developing the GUI and connecting the frontend to the backend.
            </p>
        </div>

        <div className="team-card">
            <img src="https://drive.google.com/uc?id=16arXAeIVF3tBGuuqkEwGuZi2u5X8Pk-4" alt="Derek" className={"team-card-image"}/>
            <h1>Derek Stratton</h1>
            <p className="team-card-title">Senior in CSE at UNR</p>
            <p className="team-card-description">
                Derek is currently an undergrad researcher in Dr. Emily Hand's lab. He has experience with Python, Tensorflow, NumPy, and Matplotlib, and he completed Dr. Hand’s machine learning class. Derek worked on conceptualizing, designing, and developing the learning algorithm.
            </p>
        </div>
    </section>
  );
}

export default TeamSection;
