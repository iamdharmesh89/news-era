import React, { Fragment, useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Sports from "./pages/Sports";
import Trending from "./pages/Trending";
import Politics from "./pages/Politics";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import data from "./components/data";


function App() {
  const [code, setCode]= useState("in");
  console.log(code)
  return (
    <Fragment>

      <Router>
      <select value={code} onChange={(e)=>setCode(e.target.value)}>
  {data.map((country)=>(
    <option value={country.code} key={country.code}>{country.name}</option>
  ))}
</select>
        <Routes>
          <Route
            path="/"
            element={<Home country_code={code} />}
            />
          <Route
            path="/sports"
            element={<Sports country_code={code} />}
            />
          <Route
            path="/trending"
            element={<Trending country_code={code} />}
            />
          <Route
            path="/politics"
            element={<Politics country_code={code} />}
            />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
