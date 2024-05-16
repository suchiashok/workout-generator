import { useEffect, useState } from "react";
import "./Home.scss";
import axios from "axios";
import Workout from "../components/Workout/Workout";
import Form from "../components/Form/Form";

const API_URL = "http://localhost:8000/exercises/";

function Home({ username }) {
  // const {username} = props.location.state ??;
  console.log(`username`, username);

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
  
      <section className="home">
        <Form
          numExercises={numExercises}
          setNumExercises={setNumExercises}
          setTimeInput={setTimeInput}
          timeInput={timeInput}
          onSubmit={handleSubmit}
          username={username}
        />
 <div className="background">
        {formSubmitted && (
          <Workout
            exercises={exercises}
            numExercises={numExercises}
            timeInput={timeInput}
          />
        )}
            </div>
      </section>

  );
}

export default Home;
