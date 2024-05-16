import {
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  LinearProgress,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import "./Workout.scss";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Workout({ exercises, numExercises, timeInput }) {
  const [photoUrl, setPhotoUrl] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPhoto = async () => {
      const key = "wWUOyzqz5Dubhu_GQhNkjRfHoLBSzanP6ah9fi48MPk";
      try {
        const response = await axios.get(
          `https://api.unsplash.com/photos/random?query=workout&client_id=${key}`
        );
        setPhotoUrl(response.data.urls.regular);
      } catch (error) {
        console.error("Error fetching photo:", error);
      }
    };

    getPhoto();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const getRandomExercises = () => {
    const shuffledExercises = exercises.sort(() => Math.random() - 0.5);
    return shuffledExercises.slice(0, numExercises);
  };

  const selectedExercises = getRandomExercises();
  console.log(`selectedExercises`, selectedExercises);
  console.log(`time input`, timeInput);

  return (
    <Card
      className="workout"
      sx={{ width: "70vh", position: "relative" }}
    >
      {loading ? (
        <LinearProgress />
      ) : (
        <>
          <CardHeader
            className="workout__header"
            title="Your customized workout"
          />
          <CardMedia
            component="img"
            height="194"
            image={photoUrl}
            alt="Random-Workout-Image"
          />
          <Divider
            variant="inset"
            sx={{ height: "100vh", position: "absolute" }}
          />
          {selectedExercises &&
            selectedExercises.map((exercise) => (
              <Card className="workout__content" key={exercise.id}>
                <h2>{exercise.name}</h2>
                <h3>{(timeInput / numExercises).toFixed(1) + ` minutes`}</h3>
                <h3>{exercise.caloriesPerMinute*(timeInput / numExercises).toFixed(1)+ ` calories`}</h3>
                <p>{exercise.description}</p>
              </Card>
            ))}
        </>
      )}
    </Card>
  );
}
