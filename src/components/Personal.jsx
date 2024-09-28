import React from "react";

function Personal() {
  return (
    <>
      <div className="personal-info">
        <div className="profile-picture">
          <img
            src="personal-website/src/images/my-pic.jpg"
            alt="profile picture"
          />
        </div>
        <div className="title">
          <h1>
            My name is David and
            <br />I am a{" "}
            <span className="gradient-text">backend developer!</span>
          </h1>
        </div>
        <div className="my-description">
          <p>
            I am a seasoned <span className="gradient-text">full-stack</span>{" "}
            software engineer with over <br />{" "}
            <span className="gradient-text">8 years</span> of professional
            experience, specializing in backend development. <br />
            My expertise lies in crafting robust and scalable SaaS-based <br />
            architectures on the{" "}
            <span className="gradient-text">Amazon AWS</span> platform.
          </p>
        </div>
        <div className="two-button"></div>
      </div>
    </>
  );
}

export default Personal;
