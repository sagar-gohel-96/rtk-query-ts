import { Routes, Route } from "react-router-dom";
import React from "react";
import App from "../src/App";
const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/posts" element={<App />} />
      </Routes>
    </div>
  );
};

export default Routing;
