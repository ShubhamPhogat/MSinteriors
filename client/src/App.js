// import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Detail from "./components/Detail";
import ModularKitchenCalculator from "./pages/ModularKitchenCalculator";
import SizeSelection from "./pages/SizeSelections";
import SubmitForm from "./components/SubmitForm";
import { useState } from "react";

function App() {
  const [ScrollItem, SetScrollItem] = useState("");
  return (
    <div className="App">
      <Navbar setScroll={SetScrollItem} />

      <Routes>
        <Route path="/*" element={<Home selectedScroll={ScrollItem} />} />
        <Route path="/imgView/*" element={<Detail />} />
        <Route path="/kitchenSizeCalc" element={<ModularKitchenCalculator />} />
        <Route path="/submitForm" element={<SubmitForm />} />
        <Route path="/kitchenSizeCalc/*" element={<SizeSelection />} />
      </Routes>
    </div>
  );
}

export default App;
