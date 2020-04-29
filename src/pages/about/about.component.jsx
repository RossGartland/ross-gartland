import React from 'react';
import selfImage from '../../assets/self.jpg'
import Fade from 'react-reveal/Fade';
import './about.style.css';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-container-2">
                <Fade>
                    <img className="about-img" alt="Ross Gartland" src={selfImage} />
                    <p>I am an aspiring software engineer that wants to apply my problem solving skills to issues at the forefront of technology and business.</p>
                </Fade>
            </div>
        </div>
    )
}
export default About;