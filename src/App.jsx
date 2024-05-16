import "./App.scss";
import Home from "./pages/Home";
import Start from "./components/Start/Start"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  return (
    <Router>
        <main className="main">
          <Routes>
            <Route path="/" element={<Start username={username} handleUsernameChange={handleUsernameChange} setUsername={setUsername} />} />
            <Route path="/home" element={<Home username={username} />} />
          </Routes>
        </main>
    </Router>
  );
}

export default App;
