import React from "react";
import ContentCard from "../components/content-card";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="content">
      <ContentCard
        title="About me"
        content="I am currently studying Bachelor of Information Technology at RMIT
          university. I've had a passion in technology when I was younger as I was
          intrested in how these technologies worked, how they are used in the
          real world which can help improve our quality of life. I also enjoy learning new things that I have little to no experience in
          such as learning a new coding language, playing a new sport and cooking
          new recipes like a tart."
      />
      <p>
        Some of my external links will be located at the bottom of this about
        page which includes my LinkedIn profile, my GitHub that is used for
        university and my own personal GitHub.
      </p>

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
        <li>Listening to music</li>
        <li>Sudoku</li>
      </ul>

      <h3>Links to external websites</h3>
      <div className="about-links">
        <a
          href="//www.linkedin.com/in/derek-jiang-777718215/"
          title="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="//github.com/s3844786"
          title="GitHub - Personal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare />
        </a>
        <a
          href="//github.com/derekJ25"
          title="GitHub - University"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare />
        </a>
      </div>
    </div>
  );
};
export default AboutPage;
