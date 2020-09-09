import React from "react";
import drumDemo from '../picture/drumDemo.mov';
import "video-react/dist/video-react.css";
import { Player } from 'video-react';

function DrumProject() {
    return (
      <div className="memory">
        <div class="container">
          <div class="page">
            <div class="col-lg-12">
                <h1 class="font-weight-light">Robot Drummers</h1>
                <p>
                    Robot Drummers 
                    was a part of a team assignment of 4 at UNL to make a robot 
                    drummer. The robot drummer is made up of 8 Arduinos (1 Parent and 
                    7 Children) and 7 L298N Hbridge motors connected to car door lock 
                    actuators, which power the drumstick movements. The drum set is 
                    comprised of a Snare, High Tom, Low Tom, Floor Tom, Kick, Cymbal, 
                    and Hi-Hat.</p>
                <h4 class="font-weight-light">Skills Utilized</h4>
                <div class="inner">
                <ul>
                    <li>C</li>
                    <li>Arduino IDE</li>
                    <li>Arduino specific functions</li>
                </ul>
                </div>
                <div>
                    <Player
                        playsInline
                        src={drumDemo}
                        fluid={true}
                    />
                </div>
                <br/><br/><br/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default DrumProject;