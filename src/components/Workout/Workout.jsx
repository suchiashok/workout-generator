export default function Workout({ exercises, numExercises, timeInput }) {
    const getRandomExercises = () => {
      const shuffledExercises = exercises.sort(() => Math.random() - 0.5);
      return shuffledExercises.slice(0, numExercises);
    };
  
    // Call getRandomExercises to get the selected exercises
    const selectedExercises = getRandomExercises();
    console.log(`selectedExercises`, selectedExercises);
    console.log(`time input`, timeInput);
  
    return (
      <div>
        <h1>Your customized workout: </h1>
        {selectedExercises &&
          selectedExercises.map((exercise) => (
            <div key={exercise.id}>
              <h2>{exercise.name}</h2>
              <h3>{timeInput / numExercises + ` minutes`}</h3>
              <p>{exercise.description}</p>
            </div>
          ))}
      </div>
    );
  }