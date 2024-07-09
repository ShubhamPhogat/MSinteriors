// import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Detail from "./components/Detail";
import ModularKitchenCalculator from "./pages/ModularKitchenCalculator";
import SizeSelection from "./pages/SizeSelections";
import SubmitForm from "./components/SubmitForm";
import RegisterForm from "./Auth/Register";
import { useState } from "react";
import LoginForm from "./Auth/Login";
import AdminPage from "./Admin/adminpage";
import UserDetailsCard from "./Admin/UploadCard";
import UploadCard from "./Admin/UserDetailsCard";

function App() {
  const [ScrollItem, SetScrollItem] = useState("");
  return (
    <div className="App">
      <Navbar setScroll={SetScrollItem} />

      <Routes>
        <Route path="/*" element={<Home selectedScroll={ScrollItem} />} />
        <Route path="/imgView/*" element={<Detail />} />
        <Route path="/register*" element={<RegisterForm />} />
        <Route path="/login*" element={<LoginForm />} />
        <Route path="/kitchenSizeCalc" element={<ModularKitchenCalculator />} />
        <Route path="/submitForm" element={<SubmitForm />} />
        <Route path="/kitchenSizeCalc/*" element={<SizeSelection />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/UserDetailsCard" element={<UserDetailsCard />} />
        <Route path="/UploadCard" element={<UploadCard />} />
      </Routes>
    </div>
  );
}

export default App;
