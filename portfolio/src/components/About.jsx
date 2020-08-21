import React from "react";
import profile from './profile.jpg'

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <h1 class="font-weight-light">About</h1>
            <p>
              I have graduated from UNL with a Bachelor of Science in Computer 
              Engineering and a Minor in Mathematics.  My experience there has 
              challenged my critical and analytical thinking and has given me 
              the opportunity to work in team settings and take initiative as 
              a leader in team projects.
            </p>
            <p>
              My work experience has included management positions which have 
              required me to analyze various processes, make recommendations 
              and implement new ideas.  I look forward to the opportunity to 
              apply this experience to the needs of your company.
            </p>
          </div>
          <div class="col-lg-5">
            <img src={profile} class="profile" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;