import AuthModal from "@components/AuthModal";
import Navbar from "@components/Navbar";
import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  const { authModalOpen } = useSelector((state) => state.auth);

  return (
    <Router>
      <Navbar />
      {authModalOpen && <AuthModal />}
    </Router>
  );
}
