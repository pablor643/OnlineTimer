import Image from 'react-bootstrap/Image';
import { GiAlarmClock } from "react-icons/gi";
import { RxTimer } from "react-icons/rx";
import { RxStopwatch } from "react-icons/rx";
import { LuClock9 } from "react-icons/lu";
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';






function App (){

    
    return (

        
        <div className="Container">
   <Stack gap={1}>
      <div className="p-2"><button><GiAlarmClock></GiAlarmClock></button></div>
      <div className="p-2"><button><RxTimer></RxTimer></button></div>
      <div className="p-2"><button><RxStopwatch></RxStopwatch></button></div>
      <div className="p-2"><button><LuClock9></LuClock9></button></div>
    </Stack>
        </div>
    )
}

export default App