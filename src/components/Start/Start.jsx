import "./Start.scss";
import { Link } from "react-router-dom";

function Start() {
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
          <Link to="/home"><button className="start__button">Start</button></Link>
        </div>
      </div>
    </>
  );
}

export default Start;
