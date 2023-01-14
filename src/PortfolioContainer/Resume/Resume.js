// @flow

import React, { useState} from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";
// import index from "react-typical";

export default function Resume(props){
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];
        
          //here we have
          const programmingSkillsDetails = [
            { skill: "JavaScript", ratingPercentage: 90 },
            { skill: "React JS", ratingPercentage: 80 },
            { skill: "Express JS", ratingPercentage: 90 },
            { skill: "Node JS", ratingPercentage: 90 },
            { skill: "HTML", ratingPercentage: 100 },
            { skill: "C++", ratingPercentage: 95 },
            { skill: "CSS", ratingPercentage: 100 },
            { skill: "React Native", ratingPercentage: 30 },
          ];
        
          const projectsDetails = [
            {
              title: "Realtime Chatting Web Application",
              duration: { fromDate: "2021", toDate: "2022" },
              description: "A web application in which multiple users can join rooms and chat with one another, it will display when a user joins the chat and leave the chat as well.",
              subHeading: "Tech Stack: Node.js, Express.js, Socket.io, Bootstrap.",
            },
            {
              title: "Note Taking APP",
              duration: { fromDate: "2021", toDate: "2022" },
              description: "It is a web application which could be used by users to create their own to-do list and easily manage it, It can be tested using postman, deployed",
              subHeading:
                "Tech Stack: Node.js, Express.js, Local storage, Bootstrap.",
            },
            {
              title: "College Management Web Application",
              duration: { fromDate: "2021", toDate: "2022" },
              description: "Many colleges lack a proper website for college management, this web app provides the college admin, faculty & students all a great utility to use.",
              subHeading:
                "Tech Stack: Node.js, Express.js, MySQL, EJS.",
            },
          ];
        
          const resumeDetails = [
            <div className="resume-screen-container" key="education">
              <ResumeHeading
                heading={"Institute of Engineering and Technology, DAVV"}
                subHeading={"Bachelor of Engineering, Computer Engineering"}
                fromDate={"2019"}
                toDate={"2023"}
              />
        
              <ResumeHeading
                heading={"Balaghat English Higher Secondary School"}
                subHeading={"XII"}
                fromDate={"2017"}
                toDate={"2018"}
              />

            </div>,
        
            /* WORK EXPERIENCE */
            <div className="resume-screen-container" key="work-experience">
              {/* <div className="experience-container"> */}
                <ResumeHeading
                  heading={"Full Stack Developer Trainee"}
                  subHeading={"Walkover"}
                  fromDate={"2021"}
                  toDate={"2021"}
                  description = {"This training included the skills which are required by a web developer for effectively writing, and summarizing the code, It also included the deployment of the project to the cloud platforms. Skills Learned: Git/GitHub, Front End Development, Database Management, Server Side Management, Object Oriented Programming, Cloud Deployment."}
                />
                {/* <div className="experience-description">
                  <span className="resume-description-text">
                    
                  </span>
                </div>
                <br /> */}
                <ResumeHeading
                  heading={"Martian Internship Program"}
                  subHeading={"Persistent"}
                  fromDate={"2022"}
                  toDate={"2022"}
                  description = {"This training included the skills which are required by a web developer for effectively writing, and summarizing the code, It also included the deployment of the project to the cloud platforms. Skills Learned: Git/GitHub, Front End Development, Database Management, Server Side Management, Object Oriented Programming, Cloud Deployment."}
                />
                {/* <div className="experience-description">
                  <span className="resume-description-text">
                  It is a program that helps students become industry- ready by making them learn one of the most essential and advanced subjects to become versatile web developer <br/>
                  <strong>Skills Learned:</strong> Operating Systems, Database Management System, C++, Computer Networks, Data Structures and Algorithms.

                  </span>
                </div> */}
              {/* </div> */}
            </div>,
        
            /* PROGRAMMING SKILLS */
            <div
              className="resume-screen-container programming-skills-container"
              key="programming-skills"
            >
              {programmingSkillsDetails.map((skill, index) => (
                <div className="skill-parent" key={index}>
                  <div className="heading-bullet"></div>
                  <span>{skill.skill}</span>
                  <div className="skill-percentage">
                    <div
                      style={{ width: skill.ratingPercentage + "%" }}
                      className="active-percentage-bar"
                    ></div>
                  </div>
                </div>
              ))}
            </div>,
        
            /* PROJECTS */
            <div className="resume-screen-container projects" key="projects">
              {projectsDetails.map((projectsDetails, index) => (
                <ResumeHeading
                  key={index}
                  heading={projectsDetails.title}
                  subHeading={projectsDetails.subHeading}
                  description={projectsDetails.description}
                  fromDate={projectsDetails.duration.fromDate}
                  toDate={projectsDetails.duration.toDate}
                />
              ))}
            </div>,
        
            /* Interests */
            <div className="resume-screen-container interests" key="interests">
              <ResumeHeading
                heading="Competitive Programming"
                // description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
              />
              <ResumeHeading
                heading="Reading Books"
                // description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
              />
              <ResumeHeading
                heading="Badminton"
                // description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
              />
              <ResumeHeading
                heading="Problem Solving"
              />
              <ResumeHeading
                heading="Graphic Designing"
              />
              <ResumeHeading
                heading="Team Leadership and Communication"
              />
            </div>,
          ];
        
          const handleCarousal = (index) => {
            let offsetHeight = 400   ;
        
            let newCarousalOffset = {
              style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
            };
        
            setCarousalOffsetStyle(newCarousalOffset);
            setSelectedBulletIndex(index);
          };
          const getBullets = () => {
            return resumeBullets.map((bullet, index) => (
              <div
                onClick={() => handleCarousal(index)}
                className={
                  index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
                }
                key={index}
              >
                <img
                  className="bullet-logo"
                  src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
                  alt = ""
                />
                <span className="bullet-label">{bullet.label}</span>
              </div>
            ));
          };
          const getResumeScreens = () => {
            return (
              <div
                style={carousalOffsetStyle.style}
                className="resume-details-carousal"
              >
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
              </div>
            );
          };
      //   function getHeight() {
            
      //     var divElement = document.getElementById("#educationdiv")
      
      //     // var elemHeight = divElement.offsetHeight;
      
      //     console.log(elemHeight) ;
        
      // }
    //   function getHeight() {
              
    //     const divElement = document.getElementById("educationdiv") ; 
  
    //     let elemHeight = divElement.offsetHeight;
  
    //     document.querySelector(".output").textContent
    //             = elemHeight + "px";
    // }
    return(
      <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      {/* <button onClick={getHeight()}>
      Clickkkkk
      </button>
      <p>
        Height of the div: 
        <span class="output"></span>
      </p> */}
      {/* <div className="resume-content"> */}
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      {/* </div> */}
    </div>
  );
};
