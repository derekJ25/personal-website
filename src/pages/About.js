import React from "react";
import ContentCard from "../components/content-card";
import { FaLinkedin } from "react-icons/fa";

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

      <div>
        <h2>Links</h2>
        <a className="about-links" href="//www.google.com">
          <FaLinkedin />
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
