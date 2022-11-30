import { useState, useEffect} from 'react';
import axios from "axios";


import Character from "./components/Character";



 const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((res) => {
        console.log(res);
        setUsers(res.data);
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
        {users.map((element) => {
          return (
            <Character 
            key = {element.id}
            name = {element.name}
            height = {element.height}
            mass = {element.mass}
            skin_color = {element.skin_color}
            gender = {element.gender}
            birth_year = {element.birth_year}
            eye_color = {element.eye_color}
            />
          );
        })}
      </main>
      
    </div>
  );
}

export default App;

