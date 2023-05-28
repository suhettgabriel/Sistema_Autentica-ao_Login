import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePAge";

import { AuthProvider } from "./context/auth";

const AppRoutes = () => {
 
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
