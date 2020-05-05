import React from "react";
import { SectionProps } from "./types";

function ResourcesSection({ state }: SectionProps) {
  const resources = [
    { title: "Problem Domain Book", url: "https://tinyurl.com/y6wqlau3" },
    {
      title: "Journal Article",
      url:
        "https://www.cs.utexas.edu/~pstone/Papers/bib2html/b2hd-AAMAS10-knox.html"
    },
    {
      title: "Journal Article",
      url:
        "https://www.cs.utexas.edu/~pstone/Papers/bib2html/b2hd-AAMAS12-knox.html"
    },
    { title: "Tensorflow", url: "https://www.tensorflow.org/learn" },
    { title: "Keras", url: "https://keras.io/" },
    { title: "Python 3", url: "https://docs.python.org/3/" },
    {
      title: "CS 425 - Proposal",
      url: "https://drive.google.com/uc?id=1dYuXwYyGn7maXq8FPY72peG7-1Ycprkt"
    },
    {
      title: "CS 425 - Specification",
      url: "https://drive.google.com/uc?id=1kjo0X4EUWnX5XszsXpneWB_b1bHimkvu"
    },
    {
      title: "CS 425 - Design",
      url: "https://drive.google.com/open?id=1qtAkO_eCxp2LzURWmPVqdEKxW3UnzsU4"
    },
    {
      title: "CS 425 - Prototype",
      url: "https://drive.google.com/open?id=1FCgFTbK-0sYLSqu2dnvBHz6LelXl-LL8"
    },
    {
      title: "CS 426 - Concept",
      url: "https://drive.google.com/open?id=10u19byD3-8roxrJQv5pCZQjK45AH79gc"
    },
    {
      title: "CS 426 - Specification and Design",
      url: "https://drive.google.com/open?id=146jlzu1u13ekOL2hLImcOelsT8Ciogbe"
    },
    {
      title: "CS 426 - Testing",
      url: "https://drive.google.com/open?id=1Iba6Zl-pWvgDyNoYiVhj5a3DdH1XtO7G"
    },
    {
      title: "CS 426 - Progress Demo",
      url: "https://drive.google.com/open?id=1Ikliq-K1oaZumm7qh9KVh_8cO6WYJZhL"
    }
  ];

  const elements = resources.map(({ title, url }, index) => (
    <div className="resource-container" key={index}>
      <a className="resource" href={url} rel="noopener noreferrer" target="_blank">
        <h3 className="resource-title">{title}</h3>
      </a>
    </div>
  ));

  return (
    <section
      className={
        state.currentSection === "RESOURCES_SECTION"
          ? "section"
          : "section hidden"
      }
      id="resources-section"
    >
      {elements}
    </section>
  );
}

export default ResourcesSection;
