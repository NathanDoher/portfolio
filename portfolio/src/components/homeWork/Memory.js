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
            <a target="_blank" href='https://github.com/NathanDoher/Memory'>Memory Game </a>

            was part of an assignment at the University of Nebraska Lincoln. This program was 
            written in MATLAB. The object of the game is to match random title numbers on the 
            left side with their match on the right side. As a match is discovered the titles 
            will grey out and deactivate. When all titles are matched the game is over and 
            statistics are shown.
            <hr></hr>
            <div><img src={memory} class="picture" alt="Memory Game" /></div>
            Memory Game 
            <hr></hr>
            <div><img src={memoryHard} class="picture" alt="Memory Game Harder Difficulty" /></div>
            The game support different difficulties including setting your own size of board
            <hr></hr>
            <div><img src={memoryScore} class="picture" alt="Memory Game Score" /></div>
            The statistics after game is completed
            <hr></hr>
            <div><img src={memoryTwo} class="picture" alt="Memory Game Two Player" /></div>
            The game allows for two player mode, which has color corrdinated titles
            <hr></hr>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Memory;