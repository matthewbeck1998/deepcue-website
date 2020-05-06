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
        <h2 className="about-title">Description</h2>
        <p className="about-description">
          The purpose of DeepCue is to create a machine learning model that
          learns to play a game with machine learning techniques. The user is
          able to improve the model by providing advice in the form of suggested
          button inputs. The machine learning model uses deep Q-learning to
          learn the game, using a reward function based on how far the agent
          gets into the level. Users can watch the model train in real time,
          with the option to pause the automated learning algorithm to provide
          suggested input. These suggested inputs are incorporated into the
          model, helping the assisted model perform better than an unassisted
          model.
        </p>
      </div>

      <div className="about-container">
        <h2 className="about-title">Goal</h2>
        <p className="about-description">
          The goal of DeepCue is to allow users to be a part of the process of
          reinforcement learning that the model uses. By allowing users to input
          their own cues into the model, the model can then train more quickly,
          as it is essentially guided by the user’s cue. For a user that knows
          how to play the game already, the cue should serve as a more optimal
          choice than what the algorithm would choose in the early stages of the
          algorithm’s runtime.
        </p>
      </div>

      <div className="about-container">
        <h2 className="about-title">Achievements</h2>
        <p className="about-description">
          DeepCue attempts to integrate machine learning with user interaction.
          Traditionally, machine learning is portrayed as a black box with a
          bunch of linear algebra inside of it that makes no sense to humans. By
          integrating machine learning with user interaction, DeepCue hopes to
          give insight into what the algorithm is doing behind the scenes. In
          addition, with guidance, the model should be able to train faster as
          it is being guided by the user into a more optimal path.
        </p>
      </div>

      <div className="about-container">
        <h2 className="about-title">Significance</h2>
        <p className="about-description">
          Machine learning is often viewed as a black box of math, where inputs
          are fed in to return outputs, with not much clarity on what’s inside.
          Oftentimes, machine learning is used precisely so that humans are not
          a part of the process. One example of phasing out humans is the
          development of self-driving cars. The idea behind self-driving cars is
          that humans are bad at driving, so why not let the robot do the work?
          With DeepCue, BGP++ attempts to instead combine the strengths of
          humans and computers, marrying the intuitive heuristics of humans with
          the logical calculations of computers to essentially build a better
          player.
        </p>
      </div>

      <div className="about-container">
        <h2 className="about-title">Requirements</h2>
        <p className="about-description">
          DeepCue aims to integrate human cues and machine learning with the
          goal of training a model more optimally. In this case, the model is
          applied to Super Mario Bros. DeepCue is able to load Super Mario Bros
          on an emulator and train a model using deep Q-learning. DeepCue is
          able to accept user input at any time, defined by what button to press
          at that time. This serves as the user’s cue to the program as a good
          choice that leads to better outcomes within Super Mario Bros.
        </p>
      </div>

      <div className="about-container">
        <h2 className="about-title">Potential Enhancements</h2>
        <p className="about-description">
          DeepCue can be improved to have more features and reach a larger
          audience. DeepCue could add the ability to run multiple learning
          algorithms, have a dedicated server to run the algorithms, and be able
          to crowdsource learning input. The ability to run on multiple learning
          algorithms instead of just deep Q-learning would allow DeepCue to
          compare learning rates of different algorithms and find the best
          algorithm. With a dedicated server, DeepCue could be run on anybody's
          machine instead of just people with a high-end computer. Crowdsourcing
          input through a means similar to Twitch Plays Pokemon would allow for
          a machine learning approach that utilizes a large amount of the most
          powerful computers in the world: human brains.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
