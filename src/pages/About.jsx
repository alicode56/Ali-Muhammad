import React from "react";
import "../styles/about.css";
import ProfileCard from "../components/ProfileCard";
import Skill from '../components/Skill'
import Education from "../components/Education";
import { fontsColor } from "../assets/fonts/colors";
const About = () => {
  const skillsData = [
    { name: 'JavaScript', level: 80 },
    { name: 'React Native', level: 90 },
    { name: 'Node.js', level: 70 },
    { name: 'Git', level: 70 },
    { name: 'REST APIs', level: 75 },
    { name: 'Redux', level: 70 },
    { name: 'TypeScript', level: 60 },
    { name: 'Firebase', level: 70 },
  ];
  
  return (
    <>
    <div className="about">
      <div className="intro">
      <div className="container py-5 mt-3">
        <div className="row ms-auto me-auto mt-5">
          <div class="col-lg-4 mt-3">
           <ProfileCard/>
          </div>
          <div className="col-lg-8  ps-auto pl-5">
            <div className="content">
            <h3 className="fw-light" style={{color:fontsColor.darkBlue}}>Ali Muhammad</h3>
            <h5 className="fg-theme mb-3">
              Software Engineer | React Native Developer | Mobile App Developer
            </h5>
            <p className="mb-4">
              I am a mobile developer with experience in building mobile
              applications using React Native, Node.js. I am passionate
              about coding and always eager to learn new technologies.
            </p>
            <div class="info-container">
              <div class="info-item">
                <div class="bullet"></div>
                <span style={{color:fontsColor.darkBlue}}>From: Khairpur, Pakistan</span>
              </div>
              <div class="info-item">
                <div class="bullet"></div>
                <span style={{color:fontsColor.darkBlue}}>Lives In: Islamabad, Pakistan</span>
              </div>
              <div class="info-item">
                <div class="bullet"></div>
                <span style={{color:fontsColor.darkBlue}}>Age: 23</span>
              </div>
              <div class="info-item">
                <div class="bullet"></div>
                <span style={{color:fontsColor.darkBlue}}>Gender: Male</span>
              </div>
            </div>
            <button>Download CV</button>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="container-fluid">
    <div className="skills">
      <div className="container">
      <div className="row ">
          <div className="col-md-12 text-center">
            <h5>My Skills</h5>
          </div>
        </div>
        <div className="row">
          {skillsData.map((skill, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <Skill name={skill.name} level={skill.level}/>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>    
    </div>
    <Education/>
     
    </>
  );
};

export default About;
