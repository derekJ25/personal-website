import React from "react";
import ContentCard from "../components/content-card";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="content">
      <ContentCard
        title="About me"
        content="I am currently studying Bachelor of Information Technology at RMIT
          university. I've had a passion in technology when I was a kid as I was
          intrested in how these technologies worked, how they are used in the
          real world which can help improve our quality of life."
      />

      <h3>Hobbies</h3>
      <ul>
        <li>Sports</li>
        <ul>
          <li>Basketball</li>
          <li>Volleyball</li>
          <li>Swimming</li>
        </ul>
        <li>Reading</li>
        <li>Gaming</li>
        <li>Coding</li>
        <li>
          Learning new things that I haven't done before such as new coding
          language
        </li>
        <li>Listening to music</li>
        <li>Sudoku</li>
      </ul>

      <h3>Links to external websites</h3>
      <div className="about-links">
        <a href="//www.google.com" title="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="//www.google.com" title="GitHub - Personal">
          <FaGithubSquare />
        </a>
        <a href="//www.google.com" title="GitHub - University">
          <FaGithubSquare />
        </a>
      </div>

      {/* <div className="content-section">
        <h2>About me</h2>
        <p>
          I am currently studying Bachelor of Information Technology at RMIT
          university. I've had a passion in technology when I was a kid as I was
          intrested in how these technologies worked, how they are used in the
          real world which can help improve our quality of life.
        </p>
      </div> */}
    </div>
  );
};
export default AboutPage;
