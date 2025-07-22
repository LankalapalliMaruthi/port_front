import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";
import "./style.scss";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-icons">
        <div className="icon-row">
          <a href="https://github.com/LankalapalliMaruthi" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/maruthi-lankalapalli-20998927b" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:maruthilankalapalli@gmail.com" target="_blank" rel="noreferrer">
            <FaEnvelope />
          </a>
          <a href="https://twitter.com/mAAruthi93" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
        </div>
        <a
          href="https://drive.google.com/uc?export=download&id=1XCqmEyGLF-H1QANjwbCdT9gVUsIr8lI-"
          download="Maruthi_Lankalapalli_Resume.pdf"
          className="download-resume-link"
        >
          <FaDownload className="download-icon" />
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Profile;
