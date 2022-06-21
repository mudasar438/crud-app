import React, { useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";

import Search from "./components/Search";
import Main from "./main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateUser from "./components/AddUser";
function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-sky-500 to-indigo-500">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<CreateUser />} />
            <Route path="/allusers" element={<Main />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
