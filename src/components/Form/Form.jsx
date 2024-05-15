import { useState } from "react";
import "./Form.scss";

export default function Form({
  numExercises,
  setNumExercises,
  setTimeInput,
  timeInput,
  onSubmit, // New prop to handle form submission
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(); // Call onSubmit function passed from parent component
  };

  const handleNumExercisesChange = (e) => {
    setNumExercises(e.target.value);
  };
  const handleTimeChange = (e) => {
    setTimeInput(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>Number of exercises: </label>
      <input
        required
        value={numExercises}
        onChange={handleNumExercisesChange}
        type="number"
      ></input>
      <label>Workout duration: </label>
      <input
        required
        value={timeInput}
        onChange={handleTimeChange}
        type="number"
      ></input>
      <button type="submit">Go!</button>
    </form>
  );
}
