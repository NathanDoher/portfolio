import React from "react";

function Overview() {
  return (
    <div className="overview">
      <div class="container">
        <div class="page">
          <div class="col-lg-12">
            <h1 class="font-weight-light">Overview</h1>
            <p>
            Greetings! My name is Nathan Doher and I love programming front end including but not limited to; React, JavaScript, HTML, CSS.
            My GitHub for my portfolio website can be accessed <a target="_blank" href='https://github.com/NathanDoher/portfolio'>here </a>.
            </p>
            <p>
            Wondering if I might be a good fit for your company? Click to see my <a href='/files/Resume.pdf' download>Resume</a> or my 
            <a target="_blank" href='https://www.linkedin.com/in/nathan-doher/' download>LinkedIN profile</a>.
            </p>
            <p>
            See navigation on the left side for projects worked on: PaRedox, Memory Game.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;