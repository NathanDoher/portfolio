import React from "react";

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="page">
          <div class="col-lg-12">
            <h1 class="font-weight-light">About</h1>
            <p>
              I graduated from UNL with a Bachelor of Science in Computer 
              Engineering and a Minor in Mathematics.  My experience there has 
              challenged my critical and analytical thinking and has given me 
              the opportunity to work in team settings and take initiative as 
              a leader in team projects.  I Managed my school responsiblities 
              and completed my degree while working and supporting a family.
            </p>
            <p>
              My work experience has included management positions which have 
              required me to analyze various processes, make recommendations 
              and implement new ideas. As Eric Lange stated, "through his 
              (Nathan's) hard work and daily dedication he has contributed 
              to our store's continuous sales and profit increases".
            </p>
            <p><a href='/files/Resume.pdf' download>Click to download Resume</a></p>
            <p><a href='/files/Recommend_Walmart.pdf' download>Letter of Recommendation Walmart</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;