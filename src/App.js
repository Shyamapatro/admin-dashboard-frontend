import React from "react";
import DashBoard from "./components/Dashboard/Dashboard";
import { BrowserRouter } from "react-router-dom";

function App() {
 
  
  return (
    <div className="App">
      <BrowserRouter>
      
    <DashBoard/>
      </BrowserRouter>
    </div>
  );
}

export default App;
