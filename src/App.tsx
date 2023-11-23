import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./pages/home/Hero";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
