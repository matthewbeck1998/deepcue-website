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

        {/*Row two!*/}

        <div className="team-card">
            <img src="https://www.unr.edu/main/images/colleges-schools/engineering/cse/profiles/SergiuDascalu.jpg" alt="Dascalu" className={"team-card-image"}/>
            <h1>Sergiu Dascalu</h1>
            <p className="team-card-title">BGP++ Mentor, Professor</p>
            <p className="team-card-description">
                Dascalu is a Professor in the Department of Computer Science and Engineering at the University of Nevada, Reno (UNR), which he joined in July 2002. Dascalu has a PhD degree in Computer Science (2001) from Dalhousie University, Canada and a Master’s degree in Automatic Control and Computers (1982) from the Polytechnic of Bucharest, Romania.
            </p>
        </div>

        <div className="team-card">
            <img src="https://www.unr.edu/main/images/colleges-schools/engineering/cse/profiles/DavidFeilSeifer.jpg" alt="Dave" className={"team-card-image daves-special-card-cause-his-name-is-too-long"}/>
            <h1>David Feil-Seifer</h1>
            <p className="team-card-title">BGP++ Mentor, Associate Professor, Graduate Program Director</p>
            <p className="team-card-description">
                David Feil-Seifer studied computer science for his undergraduate degree at the University of Rochester, M.S. and Ph.D. at the University of Southern California, and postdoctoral associate at Yale University.

                He has been the leader of his undergraduate robotics competition team, robotics competition coach, and research mentor to 45 undergraduates.

            </p>
        </div>

        <div className="team-card">
            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGP-WVk-HtN5g/profile-displayphoto-shrink_200_200/0?e=1594252800&v=beta&t=LRW1S-FGoH4ODVsPKcQzPU_PR9jSZttGYQKwynvCKTE" alt="Devrin" className={"team-card-image"}/>
            <h1>Davrin Lee</h1>
            <p className="team-card-title">BGP++ Mentor, Operational Program Manager at Microsoft</p>
            <p className="team-card-description">
                Devrin works full time at Microsoft while also teaching at UNR. Devrin is an instructor for both CS 425 Software Engineering and CS 426 Sr Projects.
            </p>
        </div>

        <div className="team-card">
            <img src="https://www.unr.edu/main/images/colleges-schools/engineering/cse/profiles/EmilyHand.jpg" alt="Emily" className={"team-card-image"}/>
            <h1>Emily Hand</h1>
            <p className="team-card-title">BGP++ Mentor, Assistant Professor</p>
            <p className="team-card-description">
                Dr. Emily Hand is an assistant professor in the Department of Computer Science and Engineering at the University of Nevada, Reno. Dr. Hand received her Ph.D. in computer science from the University of Maryland, College Park under the supervision of Professor Rama Chellappa. She has held research positions at NASA Ames, NASA JPL and the Naval Research Laboratory.
            </p>
        </div>
    </section>
  );
}

export default TeamSection;
