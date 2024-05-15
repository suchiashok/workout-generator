import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Workout from "./components/Workout";
import Form from "./components/Form/Form";

const API_URL = "http://localhost:8000/exercises/exercises";

function App() {
  const [exercises, setExercises] = useState([]);
  const [numExercises, setNumExercises] = useState(null);
  const [timeInput, setTimeInput] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

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

  const handleSubmit = () => {
    setFormSubmitted(true);
  };

  return (
    <div>
      <Form
        numExercises={numExercises}
        setNumExercises={setNumExercises}
        setTimeInput={setTimeInput}
        timeInput={timeInput}
        onSubmit={handleSubmit}
      />

      {formSubmitted && (
        <Workout
          exercises={exercises}
          numExercises={numExercises}
          timeInput={timeInput}
        />
      )}
    </div>
  );
}

export default App;
