import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// pages
import HomePage from "./pages/HomePage";

export const applicantBriefInfo = {
  name: "Dave Spencer Bacay",
  dateTaken: "June 21, 2022",
};

const App = (props) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
