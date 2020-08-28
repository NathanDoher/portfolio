import React from "react";
import paredoxPicture from '../paredox.png';

function Paredox() {
  return (
    <div className="paredox">
      <h2 class="font-weight-light">PaRedox</h2>
      <div class="outer">
        <p>
          <a target="_blank" href='http://wetcode.unl.edu:8080/paredox/'>PaRedox </a>
          is a research project through the University of Nebraska Lincoln that was created under 
          the leadership of Dr. Massimiliano Pierobon. PaRedox connects bioelectrical simulations to an 
          easy to use online interface that fulfills these tasks:
        </p>
        <div class="inner">
          <ul>
            <li>
              Accelerate the rate which results from oxidation-redox reactions can be gathered
            </li>
            <li>
              Connect our simulation to a greater audience
            </li>
            <li>
              Expedite the research process for bioelectronic interfaces
            </li>
            <li>
              Display simulation data in a fluent and easy to understand way
            </li>
            <li>
              Remove the need to run new physical trials for a set of parameters
            </li>
          </ul>
        </div>
        <h4 class="font-weight-light">Skills Aquired</h4>
        <div class="inner">
          <ul>
            <li>Continuous Integration Testing</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>Git</li>
            <li>JavaScript</li>
            <li>Linux</li>
            <li>MATLAB</li>
            <li>React</li>
            <li>Performance Testing</li>  
          </ul>
        </div>
        <img src={paredoxPicture} class="paredoxPicture" alt="paredoxPicture" />
      </div>
    </div>
  );
}

export default Paredox;