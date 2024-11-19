import React from "react";
import "./intro.css";
import Image from "next/image";

const Intro = () => {
  return (
    <div id="intro" className="flex flex-col items-center">
      <div className="container ">
        <img src="./Intro Video.gif" alt="test" className="introimg w-full" />

      </div>
      <div id="intro-text">
        <center>
          <h1 id="intro-head">About</h1>
        </center>
        <p id="intro-para">
          CodeRIT is the official coding club of our college and the most active
          technical club our college. We guide students through their journey to
          find their passion for technology through our hackathons, regular
          contests, workshop and information about competitions like ACM-ICPC,
          Google Code Jam, Google Summer of Code, and other online coding
          events. We conduct workshops on areas of computer science like web
          development, resume building, Git/GitHub etc. We conduct coding
          competitions which are open to all branches with exciting prizes to
          the winners and best female coder - Coding Diva as well.
        </p>
        <div id="grid">
          <div id="grid-item">
            <center>
              <h3 class="bold-text">Vision</h3>
            </center>
            <p>
              Creating a Community of enthusiastic coders with holistic
              development of how to approach a problem, problem solving and
              logic building.
            </p>
          </div>
          <div id="grid-item">
            <center>
              <h3 class="bold-text">Mission</h3>
            </center>
            <p>
              Aims to establish a coding culture on campus, reaching every
              student passionate about coding. The club’s motto is to
              Create-Build-Innovate-Solve. <br></br>
            </p>
          </div>
        </div>
      </div>
      <div class="text-center">
        <h1 id="intro-head">Upcoming Events</h1>
        <h3 class="bold-text">Ice-Breaker 2023</h3>
        <div class="inline-block mt-4 mb-4">
          <img src="./Website.png" alt="Image" class="h-80" />
<br></br>
          <a
            href="/registration"
            class="inline-block px-4 py-2  bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md"
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
