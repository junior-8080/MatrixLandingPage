import React,{useEffect} from 'react';
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
// import Dashboard from "./pages/Dashboard";
// import PockmanDeck from "./pages/PockmanDeck";
// import ModelDeck from "./pages/ModelDeck";


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      {/* <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/deck-ml" element={<ModelDeck />} />
      <Route path="/deck-pokeman" element={<PockmanDeck />} /> */}
    </Routes>
  );
}



export default App;
