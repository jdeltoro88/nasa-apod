
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto";
import RoverPhoto from "./components/RoverPhoto";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
          <Route component={Home} path="/" exact />
          <Route component={NasaPhoto} path="/nasaphoto" />
          <Route component={RoverPhoto} path="/RoverPhoto"  />
          
      </div>
    </BrowserRouter>
  );
}