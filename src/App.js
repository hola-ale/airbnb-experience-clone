import React from "react";
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Card from "./Components/Card/Card";
import data from "./data"

export default function App() {
  const items = data.map(item => {
    return (<Card key={item.id} {...item} />)
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="cards">
        { items }
      </div>
    </div>
  );
}
