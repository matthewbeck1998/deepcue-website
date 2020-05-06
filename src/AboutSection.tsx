import React from "react";
import { SectionProps } from "./types";

function AboutSection({ state }: SectionProps) {
  return (
    <section
      className={
        state.currentSection === "ABOUT_SECTION" ? "section" : "section hidden"
      }
      id={"about-section"}
    >
    <div className="about-container">
        <h2>Description</h2>
        <p>
            The purpose of DeepCue is to create a machine learning model that learns to play a game with machine learning techniques, and the user should be able to improve the model by providing advice in the form of suggested button inputs. The machine learning model will use Deep Q Learning to learn the game based on a reward function of how far the agent makes it in the level. Users can watch the model learn in real time, and they will also have the option to pause the automated learning algorithm to provide suggested input. These suggested inputs will be incorporated into the model to help it perform better than one without user assistance.
        </p>
    </div>

    <div className={"about-container"}>
        <h2>Goal</h2>
        <p>
            The goal of DeepCue is to allow users to be a part of the process of reinforcement learning that the model uses. By allowing users to input their own cues into the model, the model can then train more quickly, as it is essentially guided by the user’s cue. For a user that knows how to play the game already, the cue should serve as a more optimal choice than what the algorithm would choose in the early stages of the algorithm’s runtime.
        </p>
    </div>
        
    <div className={"about-container"}>
        <h2>
            Achievements
        </h2>
        <p>
            DeepCue attempts to achieve integration machine learning with user interaction. Traditionally, machine learning is portrayed as a black box with a bunch of linear algebra inside of it that makes no sense to humans. By integrating machine learning with user interaction, DeepCue hopes to give insight into what the algorithm is doing behind the scenes. In addition, with guidance, the model should be able to train faster as it is being guided by the user into a more optimal path.
        </p>
    </div>

    <div className={"about-container"}>
        <h2>
            Significance
        </h2>
        <p>
            Machine learning is often viewed as a black box of math, where inputs are fed in to return outputs, with not much clarity on what’s inside. Oftentimes, machine learning is used precisely so that humans are not a part of the process. One example of phasing out humans is the development of self-driving cars. The idea behind self-driving cars is that humans are bad at driving, so why not let the robot do the work? With DeepCue, BGP++ attempts to instead combine the strengths of humans and computers, marrying the intuitive heuristics of humans with the logical calculations of computers to essentially build a better player.
        </p>
    </div>

    <div className={"about-container"}>
        <h2>
            Requirements
        </h2>
        <p>
            DeepCue aims to implement integration between human cues and machine learning to train algorithms faster with the goal of playing a game better. Starting out, the game will be a 2D platformer to be chosen at some later time. DeepCue should be able to load a game, then train a model using Deep Q reinforcement learning on the game. It should be able to take user input at particular frames/times, defined by what choice/button to make/press at that time. This serves as the user’s cue to the program as a good choice that leads to better progress within the game.
        </p>
    </div>

    <div className={"about-container"}>
        <h2>
            Potential Enhancements
        </h2>
        <p>
            DeepCue can be improved to have more features and reach a larger audience. DeepCue could add the ability to run multiple learning algorithms, have a dedicated server to run the algorithms, and be able to crowdsource learning input. The ability to run on multiple learning algorithms instead of just Deep Q Learning would allow DeepCue to compare learning rates of different algorithms and find the best algorithm. With a dedicated server, DeepCue could be run on anybody's machine instead of just people with a high end computer. Crowdsourcing input through a means similar to Twitch Plays Pokemon would allow for a machine learning approach that utilizes peoples’ brains and intuition instead of computer hardware.
        </p>
    </div>

    </section>
  );
}

export default AboutSection;
