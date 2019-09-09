//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  //------------------- Setting Scoring ------------------

  const [lionsScore, setLionsScore] = useState(0);
  const [tigersScore, setTigersScore] = useState(0);
  const lionsTouchDown = () => {
    setLionsScore(lionsScore + 7)
  }
  const lionsFieldGoal = () => {
    setLionsScore(lionsScore + 3)
  }
  const tigersTouchDown = () => {
    setTigersScore(tigersScore + 7)
  }
  const tigersFieldGoal = () => {
    setTigersScore(tigersScore + 3)
  }

  //------------------- Setting Downs ------------------

  // const [downs, setDowns] = useState(0);
  // const resetDowns = () => {
  //   setDowns(0);
  // }
  // const increaseDowns = () => {
  //   setDowns(downs + 1);
  // }

  //------------------- Setting  ------------------

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{lionsScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigersScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={lionsTouchDown} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={lionsFieldGoal} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={tigersTouchDown} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={tigersFieldGoal} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
