import "./Start.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import TextField from "@mui/material/TextField";

function Start({ username, handleUsernameChange, setUserName }) {
  return (
    <>
      <div className="start">
        <div className="start__bg">
          <h2 className="start__title">
            Let's
            <br />
            Work
            <br />
            OUT
            <br />
            Together
          </h2>
          <div className="container">
          <form className="form">
            <TextField
              className="start__textField"
              id="filled-multiline-flexible"
              label="NAME"
              multiline
              maxRows={4}
              variant="filled"
              value={username}
              onChange={handleUsernameChange}
              sx={{
                "& .MuiInputLabel-root": {
                  color: "antiquewhite !important",
                },
              }}
            ></TextField>
          </form>
          {username && (
            <Link to="/home">
              <button className="start__button">Start</button>
            </Link>
          )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Start;

function getPhotos() {
  const [photoUrl, setPhotoUrl] = useState;

  useEffect(() => {
      const key = "woUyVX3quIY1wg0gtEyrgFGpIhPiycVM9lPa9MqLj80";
      axios.get(`https://api.unsplash.com/search/photos?query=workout&client_id=${key}`)
      .then(response => {setPhotoUrl(response.data.urls.regular);
      })
      .catch(error => console.error(error));
  }, []);

}
