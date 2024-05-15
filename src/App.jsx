import "./App.scss";
import Home from "./pages/Home";
import Start from "./components/Start/Start"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
        <main className="main">
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </main>
    </Router>
  );
}

export default App;
