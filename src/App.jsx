import Image from 'react-bootstrap/Image';
import { GiAlarmClock } from "react-icons/gi";
import { RxTimer } from "react-icons/rx";
import { RxStopwatch } from "react-icons/rx";
import { LuClock9 } from "react-icons/lu";
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import styled from 'styled-components';



const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: black;
`;

const Wrapper = styled.section`
  padding: 4em;
  background:rgb(144, 212, 255);
`;


function App (){

    
    return (
                
        
        <div className="Container">

   <Wrapper>
    <Title>ONLINE TIMER</Title>
   </Wrapper>

   <div className="Body">     
   <Stack gap={1}>
      <div className="p-2"><button onCl><GiAlarmClock></GiAlarmClock></button></div>
      <div className="p-2"><button><RxTimer></RxTimer></button></div>
      <div className="p-2"><button><RxStopwatch></RxStopwatch></button></div>
      <div className="p-2"><button><LuClock9></LuClock9></button></div>
    </Stack>
        

         <CountdownCircleTimer
    isPlaying
    duration={9}
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[7, 5, 2, 0]}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
  </div>

  </div>


    )
}

export default App