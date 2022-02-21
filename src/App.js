import React from "react";
import "./index.css"
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import FirstVariant from "./components/FirstVariant/FirstVariant";
import SecondVariant from "./components/Second Variant/SecondVariant";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/variant-a" element={<FirstVariant />} />
        <Route exact path="/variant-b" element={<SecondVariant />} />
      </Routes>
      </div>

      <div class="footer">
			&copy; 2022 STSMachines
		  </div>

    </div>
    </Router>
  );
}

export default App;
