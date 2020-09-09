import React from "react";
import memory from '../picture/memory.png';
import memoryHard from '../picture/memoryHard.png';
import memoryScore from '../picture/memoryScore.png';
import memoryTwo from '../picture/memoryTwo.png';

function Memory() {
  return (
    <div className="memory">
      <div class="container">
        <div class="page">
          <div class="col-lg-12">
            <h1 class="font-weight-light">Memory Game</h1>
            <p>
            <a target="_blank" href='https://github.com/NathanDoher/Memory'>Memory Game </a>

            was part of a team work assignment at the University of Nebraska Lincoln. This program was 
            written in MATLAB. The object of the game is to match random title numbers on the 
            left side with their match on the right side. As a match is discovered the titles 
            will grey out and deactivate. When all titles are matched the game is over and 
            statistics are shown.
            </p>
            <h4 class="font-weight-light">Skills Aquired</h4>
            <div class="inner">
              <ul>
                <li>MATLAB</li>
                <li>Functions</li>
                <li>Recursion</li>
                <li>Team Work</li>
              </ul>
            </div>
            <div><img src={memory} class="picture" alt="Memory Game" /></div>
            Memory Game 
            <br/><br/><br/>
            <div><img src={memoryHard} class="picture" alt="Memory Game Harder Difficulty" /></div>
            The game support different difficulties including setting your own size of board
            <br/><br/><br/>
            <div><img src={memoryScore} class="picture" alt="Memory Game Score" /></div>
            The statistics after game is completed
            <br/><br/><br/>
            <div><img src={memoryTwo} class="picture" alt="Memory Game Two Player" /></div>
            The game allows for two player mode, which has color corrdinated titles
            <br/><br/><br/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Memory;