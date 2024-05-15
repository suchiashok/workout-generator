import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const API_URL = "http://localhost:8000/exercises/exercises";

function App() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const { data } = await axios.get(`${API_URL}`);
        console.log(data);
        setExercises(data.exercises);
      } catch (error) {
        console.error(error);
      }
    };

    fetchExercises();
  }, []);

  return (
    <>
    
    </>
  //  <div>
  //   {exercises.length > 0 && exercises.map((exercise) => (
  //     <div key={exercise.id}>
  //       <h2>{exercise.name}</h2>
  //       <p>{exercise.description}</p>
  //     </div>
  //   ))}
  // </div>
  );
}

export default App;
