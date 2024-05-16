import "./Form.scss";


export default function Form({
  numExercises,
  setNumExercises,
  setTimeInput,
  timeInput,
  onSubmit, 
  username,
}) 
{
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(); 
  };

  const handleNumExercisesChange = (e) => {
    setNumExercises(e.target.value);
  };
  const handleTimeChange = (e) => {
    setTimeInput(e.target.value);
  };

  return (
    <section className="form">
    <form onSubmit={handleSubmit} className="form__main">
    <h2 className="form__greeting">Hey {username}</h2>
      <label className="form__label">Number of exercises: </label>
      <input className="form__input"
        required
        value={numExercises}
        onChange={handleNumExercisesChange}
        type="number"
      ></input>
      <label className="form__label">Workout duration (in minutes): </label>
      <input className="form__input"
        required
        value={timeInput}
        onChange={handleTimeChange}
        type="number"
      ></input>
      <button className="form__button" type="submit">Go!</button>
    </form>
    </section>
  );
}
