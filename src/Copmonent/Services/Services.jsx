import React from "react";
import "./Services.css";
import icon1 from "../../Assets/icon1.png";
import icon2 from "../../Assets/icon2.png";
import icon3 from "../../Assets/icon3.png";
import icon4 from "../../Assets/icon4.png";
import icon5 from "../../Assets/icon5.png";
import icon6 from "../../Assets/icon6.png";

const Services = () => {
  return (
    <div className="services-container">
      <div className="container">
        <p style={{ fontWeight: "bold", fontSize: "23px" }}>
          Discover the Ultimate Learning Experience for Your Educational Journey
        </p>
        <p style={{fontSize:"17px"}}>tailored to meet your unique learning needs and goals</p>
        <p style={{fontSize:"17px"}}>Unlock the access from our exceptional features</p>
      </div>
      <div className="service-box1 expert-mentor">
        <img src={icon1}></img>
        <h3>Expert Mentor</h3>
        <p>Specialized learning guidance to enhance the learning</p>
      </div>

      <div className="service-box2 personalized-learning">
        <img src={icon2}></img>
        <h3>Personalized learning path</h3>
        <p>A personalized learning path tailored to educational content</p>
      </div>

      <div className="service-box3 workshop">
        <img src={icon3}></img>
        <h3>Workshop</h3>
        <p>Practical training on a specific topic or a skill</p>
      </div>

      <div className="service-box4 mentorship">
        <img src={icon4}></img>
        <h3>Mentorship</h3>
        <p>Gain personalized mentorship from industry experts</p>
      </div>

      <div className="service-box5 resource-library">
        <img src={icon5}></img>
        <h3>Resource Library</h3>
        <p>Utilize a rich library of learning materials and resources</p>
      </div>

      <div className="service-box6 career-services">
        <img src={icon6}></img>
        <h3>Career Services</h3>
        <p>Access career coaching and job placement assistance</p>
      </div>
    </div>
  );
};

export default Services;
