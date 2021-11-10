import { createContext, useState } from "react";
import GrandPa from "./Components/Context/GranPA";
export const Msg = createContext('');


function App() {
  const [message, setMessage] = useState("No");
  const [messageToChild, setMessageToChild] = useState();
  
 
  
  const messageControl = (e) => {
    setMessage(e.target.value);
  };

  const sender = () => {
    setMessageToChild(message);
  };

  return (
    <div className="context">
      <h1>APP</h1>
      <input type="text" onChange={messageControl} value={message} />
      <button onClick={sender}>APP message</button>
      <Msg.Provider value={messageToChild}>
      <GrandPa/>
      </Msg.Provider>
    </div>
  );
}

export default App;
