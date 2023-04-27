import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Sports from "./pages/Sports";
import Trending from "./pages/Trending";
import Politics from "./pages/Politics";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home country_code='in'  />}
          />
          <Route
            path="/sports"
            element={<Sports country_code='in' />}
          />
          <Route
            path="/trending"
            element={<Trending country_code='in' />}
          />
          <Route
            path="/politics"
            element={<Politics country_code='in' />}
          />
        </Routes>
      </Router>
  );
}

export default App;
