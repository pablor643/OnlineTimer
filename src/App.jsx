import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styled from "styled-components";
import React, { useState } from "react";

const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: black;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: rgb(144, 212, 255);
`;

function App() {
  const [On, setOn] = useState(false);

  function click() {
    if (On === false) {
      setOn(true);
    } else {
      setOn(false);
    }
  }

  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  function type(e) {
    setInputValue(e.target.value)
  }

  
  return (
    <div className="Container">
      <Wrapper>
        <Title>ONLINE TIMER</Title>
      </Wrapper>

      <div className="Body">
        <CountdownCircleTimer
          isPlaying={On}
          duration={30}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[7, 5, 2, 0]}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      </div>

      <div className="buttons">
        <button onClick={click}>Play/Pause</button>
        <input onChange={type}/>
        <button>Click go</button>
      </div>
    </div>
  );
}

export default App;
