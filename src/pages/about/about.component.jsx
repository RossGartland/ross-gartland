import React from "react";
import ArrowDown from "../../components/arrow/arrow-down.component";
import "./about.style.css";

const About = () => {
  return (
    <div id="about" className="about-container">
      <div className="about-container-2">
        <h2>About Me</h2>
        <p>
          I am a software developer with a strong focus on building scalable and
          efficient APIs. My expertise lies in backend development, particularly
          with <strong>Java Spring</strong> and <strong>Python</strong>, where I
          design robust, high-performance services. I also have experience
          working with <strong>Angular</strong> to create dynamic web
          applications that integrate seamlessly with APIs.
        </p>
        <p>
          I am passionate about cloud technologies, especially{" "}
          <strong>AWS</strong>, and enjoy leveraging cloud-native services to
          enhance application performance, scalability, and security. From
          deploying microservices to optimizing infrastructure, I am always
          looking to refine my skills in cloud computing.
        </p>
      </div>
      <ArrowDown link={"#portfolio"} title={"portfolio"} />
    </div>
  );
};

export default About;
