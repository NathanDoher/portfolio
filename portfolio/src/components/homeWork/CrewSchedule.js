import React from "react";
import crewSchedule from '../picture/crewSchedule.png';
import crewLogin from '../picture/crewLogin.png';
import crewClassDiagram from '../picture/crewClassDiagram.png';
import crewDatabase from '../picture/crewDatabase.png';

function CrewSchedule() {
  return (
    <div className="crewSchedule">
      <div class="container">
        <div class="page">
          <div class="col-lg-12">
            <h1 class="font-weight-light">Crew Scheduler</h1>
            <p>
              <a target="_blank" href='https://git.unl.edu/rustinc/Group14-Airline-Scheduler'>Airline Crew Scheduler </a>
              was part of a team of four project at University of Nebraska Lincoln. We used java to create an user interface in order to communicate with a database to send and receive information to the crew schedule application.
            </p>
            <h4 class="font-weight-light">Skills Utilized</h4>
            <div class="inner">
              <ul>
                <li>Java</li>
                <li>Jdbc</li>
                <li>MySQL</li>
                <li>Modify Waterfall Coding Model</li>
                <li>Communication</li>
                <li>Teamwork</li>
                <li>Presentations</li>
                <li>Sponsor Meetings </li>
              </ul>
            </div>
            <div><img src={crewLogin} class="picture" alt="Crew Login" /></div>
            Login into the Crew Scheduler 
            <br/><br/><br/>
            <div><img src={crewSchedule} class="picture" alt="Crew Schedule" /></div>
            Main Screen of the Crew Scheduler
            <br/><br/><br/>
            <div><img src={crewClassDiagram} class="picture" alt="Crew Class Diagram" /></div>
            Diagram of our classes 
            <br/><br/><br/>
            <div><img src={crewDatabase} class="picture" alt="Crew Database" /></div>
            Diagram of our database
            <br/><br/><br/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrewSchedule;