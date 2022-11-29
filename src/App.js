import { useState, useEffect} from 'react';
import axios from "axios";

//import "./styles.css";

import Characters from "./components/Character";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        
      })
      .catch((err) => console.log("😵 GET FAILED...", err));
  }, []);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <main className="container">
        
      </main>
    </div>
  );
}

export default App;

