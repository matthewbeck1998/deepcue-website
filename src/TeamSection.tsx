import React from "react";
import MatthewBeckImage from "./MatthewBeck.jpeg";
import WilliamGarnerImage from "./WilliamGarner.jpeg";
import PricePostonImage from "./PricePoston.jpeg";
import DerekStrattonImage from "./DerekStratton.jpeg";
import SergiuDascaluImage from "./SergiuDascalu.jpg";
import DavidFeilSeiferImage from "./DavidFeilSeifer.jpg";
import DevrinLeeImage from "./DevrinLee.jpeg";
import EmilyHandImage from "./EmilyHand.jpg";

function TeamSection() {
  return (
    <section className="section" id="team-section">
      <div className="team-card">
        <img
          src={MatthewBeckImage}
          alt="Matthew Beck"
          className="team-card-image"
        />
        <div className="team-card-nameplate">
          <h2 className="team-card-name">Matthew Beck</h2>
          <p className="team-card-title">User Interface Developer</p>
          <p className="team-card-title">Senior, CSE Department</p>
        </div>
        <p className="team-card-description">
          Matthew Beck currently works as a software development intern at AVA
          Logistics. At his internship, Matt works to replace legacy code on
          both the front-end and back-end of his company’s proprietary software,
          using technologies such as React, TypeScript, and Clojure. Matt helped
          develop key components of DeepCue’s graphical user interface.
        </p>
      </div>

      <div className="team-card">
        <img
          src={WilliamGarnerImage}
          alt="William Garner"
          className="team-card-image"
        />
        <div className="team-card-nameplate">
          <h2 className="team-card-name">William Garner</h2>
          <p className="team-card-title">User Interface Developer</p>
          <p className="team-card-title">Senior, CSE Department</p>
        </div>

        <p className="team-card-description">
          William Garner is currently a software development intern at Talage.
          In his internship he works on full stack development using Vue and
          Bootstrap for frontend development and Node.js for backend
          development. Will took Dr. Hand’s Machine Learning class in the Fall
          of 2018. Will helped develop key components of DeepCue's graphical
          user interface. He also created and maintained the controller linking
          the front-end and back-end.
        </p>
      </div>

      <div className="team-card">
        <img
          src={PricePostonImage}
          alt="Price Poston"
          className="team-card-image"
        />
        <div className="team-card-nameplate">
          <h2 className="team-card-name">Price Poston</h2>
          <p className="team-card-title">User Interface Developer</p>
          <p className="team-card-title">Senior, CSE Department</p>
        </div>

        <p className="team-card-description">
          Price Poston was a full stack developer using ClojureScript,
          TypeScript, and React for front-end development and Clojure for
          backend development at his AVA Logistics internship. Price took Dr.
          Hand’s Machine Learning class in the Fall of 2019. Price helped
          develop key components of DeepCue's graphical user interface.
        </p>
      </div>

      <div className="team-card">
        <img
          src={DerekStrattonImage}
          alt="Derek Stratton"
          className="team-card-image"
        />
        <div className="team-card-nameplate">
          <h2 className="team-card-name">Derek Stratton</h2>
          <p className="team-card-title">Machine Learning Developer</p>
          <p className="team-card-title">Senior, CSE Department</p>
        </div>

        <p className="team-card-description">
          Derek Stratton is currently an undergrad researcher in Dr. Emily
          Hand's lab. He has experience with Python, TensorFlow, NumPy, and
          Matplotlib, and he completed Dr. Hand’s machine learning class. Derek
          worked on conceptualizing, designing, and developing the advice
          learning algorithm.
        </p>
      </div>

      <div className="team-card">
        <img
          src={SergiuDascaluImage}
          alt="Sergiu Dascalu"
          className="team-card-image"
        />
        <div className="team-card-nameplate">
          <h2 className="team-card-name">Sergiu Dascalu</h2>
          <p className="team-card-title">BGP++ Advisor</p>
          <p className="team-card-title">Professor</p>
        </div>

        <p className="team-card-description">
          Sergiu Dascalu is a Professor in the Department of Computer Science
          and Engineering at the University of Nevada, Reno (UNR), which he
          joined in July 2002. Dascalu has a PhD degree in Computer Science
          (2001) from Dalhousie University, Canada and a Master’s degree in
          Automatic Control and Computers (1982) from the Polytechnic of
          Bucharest, Romania.
        </p>
      </div>

      <div className="team-card">
        <img
          src={DavidFeilSeiferImage}
          alt="David Feil-Seifer"
          className="team-card-image"
        />
        <div className="team-card-nameplate">
          <h2 className="team-card-name">David Feil-Seifer</h2>
          <p className="team-card-title">BGP++ Advisor</p>
          <p className="team-card-title">Associate Professor</p>
          <p className="team-card-title">Graduate Program Director</p>
        </div>

        <p className="team-card-description">
          David Feil-Seifer studied computer science for his undergraduate
          degree at the University of Rochester, M.S. and Ph.D. at the
          University of Southern California, and postdoctoral associate at Yale
          University. He has been the leader of his undergraduate robotics
          competition team, robotics competition coach, and research mentor to
          45 undergraduates.
        </p>
      </div>

      <div className="team-card">
        <img
          src={DevrinLeeImage}
          alt="Devrin Lee"
          className="team-card-image"
        />
        <div className="team-card-nameplate">
          <h2 className="team-card-name">Devrin Lee</h2>
          <p className="team-card-title">BGP++ Advisor</p>
          <p className="team-card-title">Operational Program Manager</p>
        </div>

        <p className="team-card-description">
          Devrin Lee is an Operational Program Manager at Microsoft and also
          teaches CS 425 - Software Engineering and CS 426 - Senior Projects at
          the University of Nevada, Reno. Devrin is experienced in the software
          engineering process performed in the industry and brings much needed
          knowledge of what's really going on to her students.
        </p>
      </div>

      <div className="team-card">
        <img
          src={EmilyHandImage}
          alt="Emily Hand"
          className="team-card-image"
        />
        <div className="team-card-nameplate">
          <h2 className="team-card-name">Emily Hand</h2>
          <p className="team-card-title">BGP++ Advisor</p>
          <p className="team-card-title">Assistant Professor</p>
        </div>

        <p className="team-card-description">
          Dr. Emily Hand is an assistant professor in the Department of Computer
          Science and Engineering at the University of Nevada, Reno. Dr. Hand
          received her Ph.D. in computer science from the University of
          Maryland, College Park under the supervision of Professor Rama
          Chellappa. She has held research positions at NASA Ames, NASA JPL and
          the Naval Research Laboratory.
        </p>
      </div>
    </section>
  );
}

export default TeamSection;
