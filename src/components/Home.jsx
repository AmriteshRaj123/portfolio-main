import React from "react";
import pdf from "./pdf/resume.pdf";
import hero from "./data/WhatsApp Image 2024-02-18 at 23.24.29.jpeg";

const Home = () => {
  
  

  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          
          <a
            href={pdf}
            download="Resume.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Resume
          </a>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={hero} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;