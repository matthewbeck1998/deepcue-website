(this["webpackJsonpdeepcue-website"]=this["webpackJsonpdeepcue-website"]||[]).push([[0],[,,,,,function(e,a,t){e.exports=t(12)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(3),s=t.n(i),l=(t(10),t(4));t(11);var o=function(){return r.a.createElement("div",{className:"title-bar"},r.a.createElement("img",{alt:"DeepCue icon",className:"icon",src:"https://drive.google.com/uc?id=1Sia2gh_o7ylmqsNpV5gRQN6awiLvkbK4"}),r.a.createElement("h1",{className:"title"},"DeepCue"))};var c=function(e){var a=e.dispatch;function t(e){return function(){a({type:"CHANGE_SECTION",value:e})}}var n=r.a.useCallback(t("HOME_SECTION"),[a]),i=r.a.useCallback(t("ABOUT_SECTION"),[a]),s=r.a.useCallback(t("TEAM_SECTION"),[a]),l=r.a.useCallback(t("RESOURCES_SECTION"),[a]),o=r.a.useCallback(t("NEWS_SECTION"),[a]);return r.a.createElement("div",{className:"tab-selector"},r.a.createElement("div",{className:"tab",onClick:n},r.a.createElement("strong",{className:"tab-label"},"Home")),r.a.createElement("div",{className:"tab",onClick:i},r.a.createElement("strong",{className:"tab-label"},"About")),r.a.createElement("div",{className:"tab",onClick:s},r.a.createElement("strong",{className:"tab-label"},"Team")),r.a.createElement("div",{className:"tab",onClick:l},r.a.createElement("strong",{className:"tab-label"},"Resources")),r.a.createElement("div",{className:"tab",onClick:o},r.a.createElement("strong",{className:"tab-label"},"News")))};var m=function(e){var a=e.dispatch;return r.a.createElement("div",{className:"header"},r.a.createElement(o,null),r.a.createElement(c,{dispatch:a}))};var d=function(e){var a=e.state;return r.a.createElement("section",{className:"HOME_SECTION"===a.currentSection?"section":"section hidden",id:"home-section"},r.a.createElement("div",{className:"home-container"},r.a.createElement("div",{className:"intro"},r.a.createElement("h2",{className:"intro-line"},"DeepCue"),r.a.createElement("h3",{className:"intro-line"},"CS 426 - Senior Projects in Computer Science"),r.a.createElement("h3",{className:"intro-line"},"Department of Computer Science and Engineering"),r.a.createElement("h3",{className:"intro-line"},"University of Nevada, Reno"),r.a.createElement("h3",{className:"intro-line"},"Spring 2020"),r.a.createElement("h3",{className:"intro-line"},"Team #1 - BGP++"))),r.a.createElement("div",{className:"home-container"},r.a.createElement("img",{alt:"DeepCue user interface",className:"image",src:"https://drive.google.com/uc?id=1LIg3n8QVVO_Typ5t9U4d4cGXdiUnCDll"})),r.a.createElement("div",{className:"home-container"},r.a.createElement("p",{className:"abstract"},"DeepCue uses a deep Q-learning algorithm to initially learn how to play a game then uses a convolutional neural network to incorporate user guidance in the form of game inputs into the learning process. BGP++ will start by applying DeepCue to Super Mario Bros. In the case of Super Mario Bros, the possible game inputs are left, right, down, A, and B. The user can help the model recognize when to perform actions. An example is a user pressing A to jump when Mario encounters a pit. The goal of DeepCue is to show that a machine learning model accepting user guidance outperforms a model without user guidance in both how quickly it is trained and how well it performs.")),r.a.createElement("div",{className:"home-container"},r.a.createElement("div",{className:"video-wrapper"},r.a.createElement("iframe",{className:"video",src:"https://www.youtube.com/embed/C8_xEUezvII",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"DeepCue Video"}))))};var h=function(e){var a=e.state;return r.a.createElement("section",{className:"ABOUT_SECTION"===a.currentSection?"section":"section hidden",id:"about-section"},r.a.createElement("div",{className:"about-container"},r.a.createElement("h2",null,"Description"),r.a.createElement("p",null,"The purpose of DeepCue is to create a machine learning model that learns to play a game with machine learning techniques, and the user should be able to improve the model by providing advice in the form of suggested button inputs. The machine learning model will use Deep Q Learning to learn the game based on a reward function of how far the agent makes it in the level. Users can watch the model learn in real time, and they will also have the option to pause the automated learning algorithm to provide suggested input. These suggested inputs will be incorporated into the model to help it perform better than one without user assistance.")),r.a.createElement("div",{className:"about-container"},r.a.createElement("h2",null,"Goal"),r.a.createElement("p",null,"The goal of DeepCue is to allow users to be a part of the process of reinforcement learning that the model uses. By allowing users to input their own cues into the model, the model can then train more quickly, as it is essentially guided by the user\u2019s cue. For a user that knows how to play the game already, the cue should serve as a more optimal choice than what the algorithm would choose in the early stages of the algorithm\u2019s runtime.")),r.a.createElement("div",{className:"about-container"},r.a.createElement("h2",null,"Achievements"),r.a.createElement("p",null,"DeepCue attempts to achieve integration machine learning with user interaction. Traditionally, machine learning is portrayed as a black box with a bunch of linear algebra inside of it that makes no sense to humans. By integrating machine learning with user interaction, DeepCue hopes to give insight into what the algorithm is doing behind the scenes. In addition, with guidance, the model should be able to train faster as it is being guided by the user into a more optimal path.")),r.a.createElement("div",{className:"about-container"},r.a.createElement("h2",null,"Significance"),r.a.createElement("p",null,"Machine learning is often viewed as a black box of math, where inputs are fed in to return outputs, with not much clarity on what\u2019s inside. Oftentimes, machine learning is used precisely so that humans are not a part of the process. One example of phasing out humans is the development of self-driving cars. The idea behind self-driving cars is that humans are bad at driving, so why not let the robot do the work? With DeepCue, BGP++ attempts to instead combine the strengths of humans and computers, marrying the intuitive heuristics of humans with the logical calculations of computers to essentially build a better player.")),r.a.createElement("div",{className:"about-container"},r.a.createElement("h2",null,"Requirements"),r.a.createElement("p",null,"DeepCue aims to implement integration between human cues and machine learning to train algorithms faster with the goal of playing a game better. Starting out, the game will be a 2D platformer to be chosen at some later time. DeepCue should be able to load a game, then train a model using Deep Q reinforcement learning on the game. It should be able to take user input at particular frames/times, defined by what choice/button to make/press at that time. This serves as the user\u2019s cue to the program as a good choice that leads to better progress within the game.")),r.a.createElement("div",{className:"about-container"},r.a.createElement("h2",null,"Potential Enhancements"),r.a.createElement("p",null,"DeepCue can be improved to have more features and reach a larger audience. DeepCue could add the ability to run multiple learning algorithms, have a dedicated server to run the algorithms, and be able to crowdsource learning input. The ability to run on multiple learning algorithms instead of just Deep Q Learning would allow DeepCue to compare learning rates of different algorithms and find the best algorithm. With a dedicated server, DeepCue could be run on anybody's machine instead of just people with a high end computer. Crowdsourcing input through a means similar to Twitch Plays Pokemon would allow for a machine learning approach that utilizes peoples\u2019 brains and intuition instead of computer hardware.")))};var u=function(e){var a=e.state;return r.a.createElement("section",{className:"TEAM_SECTION"===a.currentSection?"section":"section hidden",id:"team-section"},r.a.createElement("div",{className:"team-card"},r.a.createElement("img",{src:"https://drive.google.com/uc?id=1al8XRmzQMYRHMO9DZVY2hX8bY5ZUKcXu",alt:"Matthew Beck",className:"team-card-image"}),r.a.createElement("div",{className:"team-card-nameplate"},r.a.createElement("h1",{className:"team-card-name"},"Matthew Beck"),r.a.createElement("p",{className:"team-card-title"},"Senior in CSE at UNR")),r.a.createElement("p",{className:"team-card-description"},"Matthew Beck currently works as a software development intern at AVA Logistics. At his internship, Matt works to replace legacy code on both the front-end and back-end of his company\u2019s proprietary software, using technologies such as React, TypeScript, and Clojure. Matt helped develop key components of DeepCue\u2019s graphical user interface.")),r.a.createElement("div",{className:"team-card"},r.a.createElement("img",{src:"https://drive.google.com/uc?id=1oH-ywOaV_J3H02wouFWYURoKSmIOuRrF",alt:"William Garner",className:"team-card-image"}),r.a.createElement("div",{className:"team-card-nameplate"},r.a.createElement("h1",{className:"team-card-name"},"William Garner"),r.a.createElement("p",{className:"team-card-title"},"Senior in CSE at UNR")),r.a.createElement("p",{className:"team-card-description"},"William Garner is currently a software development intern at Talage. In his internship he works on full stack development using Vue and Bootstrap for frontend development and Node.js for backend development. Will took Dr. Hand\u2019s Machine Learning class in the Fall of 2018. Will helped develop key components of DeepCue's graphical user interface. He also created and maintained the controller linking the front-end and back-end.")),r.a.createElement("div",{className:"team-card"},r.a.createElement("img",{src:"https://drive.google.com/uc?id=1Z4GztOv1bh9obD1V6luxEh_pxq3_tUXC",alt:"Price Poston",className:"team-card-image"}),r.a.createElement("div",{className:"team-card-nameplate"},r.a.createElement("h1",{className:"team-card-name"},"Price Poston"),r.a.createElement("p",{className:"team-card-title"},"Senior in CSE at UNR")),r.a.createElement("p",{className:"team-card-description"},"Price Poston was a full stack developer using ClojureScript, TypeScript, and React for front-end development and Clojure for backend development at his AVA Logistics internship. Price took Dr. Hand\u2019s Machine Learning class in the Fall of 2019. Price helped develop key components of DeepCue's graphical user interface.")),r.a.createElement("div",{className:"team-card"},r.a.createElement("img",{src:"https://drive.google.com/uc?id=16arXAeIVF3tBGuuqkEwGuZi2u5X8Pk-4",alt:"Derek Stratton",className:"team-card-image"}),r.a.createElement("div",{className:"team-card-nameplate"},r.a.createElement("h1",{className:"team-card-name"},"Derek Stratton"),r.a.createElement("p",{className:"team-card-title"},"Senior in CSE at UNR")),r.a.createElement("p",{className:"team-card-description"},"Derek Stratton is currently an undergrad researcher in Dr. Emily Hand's lab. He has experience with Python, TensorFlow, NumPy, and Matplotlib, and he completed Dr. Hand\u2019s machine learning class. Derek worked on conceptualizing, designing, and developing the advice learning algorithm.")),r.a.createElement("div",{className:"team-card"},r.a.createElement("img",{src:"https://www.unr.edu/main/images/colleges-schools/engineering/cse/profiles/SergiuDascalu.jpg",alt:"Sergiu Dascalu",className:"team-card-image"}),r.a.createElement("div",{className:"team-card-nameplate"},r.a.createElement("h1",{className:"team-card-name"},"Sergiu Dascalu"),r.a.createElement("p",{className:"team-card-title"},"BGP++ Advisor"),r.a.createElement("p",{className:"team-card-title"},"Professor")),r.a.createElement("p",{className:"team-card-description"},"Sergiu Dascalu is a Professor in the Department of Computer Science and Engineering at the University of Nevada, Reno (UNR), which he joined in July 2002. Dascalu has a PhD degree in Computer Science (2001) from Dalhousie University, Canada and a Master\u2019s degree in Automatic Control and Computers (1982) from the Polytechnic of Bucharest, Romania.")),r.a.createElement("div",{className:"team-card"},r.a.createElement("img",{src:"https://www.unr.edu/main/images/colleges-schools/engineering/cse/profiles/DavidFeilSeifer.jpg",alt:"David Feil-Seifer",className:"team-card-image"}),r.a.createElement("div",{className:"team-card-nameplate"},r.a.createElement("h1",{className:"team-card-name"},"David Feil-Seifer"),r.a.createElement("p",{className:"team-card-title"},"BGP++ Advisor"),r.a.createElement("p",{className:"team-card-title"},"Associate Professor"),r.a.createElement("p",{className:"team-card-title"},"Graduate Program Director")),r.a.createElement("p",{className:"team-card-description"},"David Feil-Seifer studied computer science for his undergraduate degree at the University of Rochester, M.S. and Ph.D. at the University of Southern California, and postdoctoral associate at Yale University. He has been the leader of his undergraduate robotics competition team, robotics competition coach, and research mentor to 45 undergraduates.")),r.a.createElement("div",{className:"team-card"},r.a.createElement("img",{src:"https://media-exp1.licdn.com/dms/image/C4E03AQGP-WVk-HtN5g/profile-displayphoto-shrink_200_200/0?e=1594252800&v=beta&t=LRW1S-FGoH4ODVsPKcQzPU_PR9jSZttGYQKwynvCKTE",alt:"Devrin Lee",className:"team-card-image"}),r.a.createElement("div",{className:"team-card-nameplate"},r.a.createElement("h1",{className:"team-card-name"},"Devrin Lee"),r.a.createElement("p",{className:"team-card-title"},"BGP++ Advisor"),r.a.createElement("p",{className:"team-card-title"},"Operational Program Manager")),r.a.createElement("p",{className:"team-card-description"},"Devrin Lee is an Operational Program Manager at Microsoft and also teaches CS 425 - Software Engineering and CS 426 - Senior Projects at the University of Nevada, Reno. Devrin is experienced in the software engineering process performed in the industry and brings much needed knowledge of what's really going on to her students.")),r.a.createElement("div",{className:"team-card"},r.a.createElement("img",{src:"https://www.unr.edu/main/images/colleges-schools/engineering/cse/profiles/EmilyHand.jpg",alt:"Emily Hand",className:"team-card-image"}),r.a.createElement("div",{className:"team-card-nameplate"},r.a.createElement("h1",{className:"team-card-name"},"Emily Hand"),r.a.createElement("p",{className:"team-card-title"},"BGP++ Advisor"),r.a.createElement("p",{className:"team-card-title"},"Assistant Professor")),r.a.createElement("p",{className:"team-card-description"},"Dr. Emily Hand is an assistant professor in the Department of Computer Science and Engineering at the University of Nevada, Reno. Dr. Hand received her Ph.D. in computer science from the University of Maryland, College Park under the supervision of Professor Rama Chellappa. She has held research positions at NASA Ames, NASA JPL and the Naval Research Laboratory.")))};var p=function(e){var a=e.state,t=[{title:"Problem Domain Book",url:"https://tinyurl.com/y6wqlau3"},{title:"Journal Article",url:"https://www.cs.utexas.edu/~pstone/Papers/bib2html/b2hd-AAMAS10-knox.html"},{title:"Journal Article",url:"https://www.cs.utexas.edu/~pstone/Papers/bib2html/b2hd-AAMAS12-knox.html"},{title:"Tensorflow",url:"https://www.tensorflow.org/learn"},{title:"Keras",url:"https://keras.io/"},{title:"Python 3",url:"https://docs.python.org/3/"},{title:"CS 425 - Proposal",url:"https://drive.google.com/uc?id=1dYuXwYyGn7maXq8FPY72peG7-1Ycprkt"},{title:"CS 425 - Specification",url:"https://drive.google.com/uc?id=1kjo0X4EUWnX5XszsXpneWB_b1bHimkvu"},{title:"CS 425 - Design",url:"https://drive.google.com/open?id=1qtAkO_eCxp2LzURWmPVqdEKxW3UnzsU4"},{title:"CS 425 - Prototype",url:"https://drive.google.com/open?id=1FCgFTbK-0sYLSqu2dnvBHz6LelXl-LL8"},{title:"CS 426 - Concept",url:"https://drive.google.com/open?id=10u19byD3-8roxrJQv5pCZQjK45AH79gc"},{title:"CS 426 - Specification and Design",url:"https://drive.google.com/open?id=146jlzu1u13ekOL2hLImcOelsT8Ciogbe"},{title:"CS 426 - Testing",url:"https://drive.google.com/open?id=1Iba6Zl-pWvgDyNoYiVhj5a3DdH1XtO7G"},{title:"CS 426 - Progress Demo",url:"https://drive.google.com/open?id=1Ikliq-K1oaZumm7qh9KVh_8cO6WYJZhL"}].map((function(e,a){var t=e.title,n=e.url;return r.a.createElement("div",{className:"resource-container",key:a},r.a.createElement("a",{className:"resource",href:n,rel:"noopener noreferrer",target:"_blank"},r.a.createElement("h3",{className:"resource-title"},t)))}));return r.a.createElement("section",{className:"RESOURCES_SECTION"===a.currentSection?"section":"section hidden",id:"resources-section"},t)};var g=function(e){var a=e.state,t=[{date:"2020-04-29",text:"BGP++ has completed development on DeepCue!",title:"DeepCue Completed"},{date:"2020-04-17",text:"BGP++ has completed development on the advice learning.",title:"Advice Learning Completed"},{date:"2020-03-10",text:"BGP++ has completed development on the user interface.",title:"User Interface Completed"},{date:"2019-12-06",text:"BGP++ has completed a prototype of the user interface.",title:"User Interface Prototype Completed"},{date:"2019-11-30",text:"BGP++ has completed development on the reinforcement learning.",title:"Reinforcement Learning Completed"}].map((function(e,a){var t=e.date,n=e.text,i=e.title;return r.a.createElement("div",{className:"news-container",key:a},r.a.createElement("h3",{className:"news-title"},"".concat(t," - ").concat(i)),r.a.createElement("span",{className:"news-text"},n))}));return r.a.createElement("section",{className:"NEWS_SECTION"===a.currentSection?"section":"section hidden",id:"news-section"},t)},E=t(1);function v(e,a){switch(a.type){case"CHANGE_SECTION":return Object(E.a)(Object(E.a)({},e),{},{currentSection:a.value})}}var f={currentSection:"HOME_SECTION"};var N=function(){var e=r.a.useReducer(v,f),a=Object(l.a)(e,2),t=a[0],n=a[1];return r.a.createElement("div",{className:"website"},r.a.createElement(m,{dispatch:n}),r.a.createElement(d,{state:t}),r.a.createElement(h,{state:t}),r.a.createElement(u,{state:t}),r.a.createElement(p,{state:t}),r.a.createElement(g,{state:t}))};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.46c18a17.chunk.js.map