import AuthModal from "@components/AuthModal";
import Navbar from "@components/Navbar";
import PrivateRoute from "@components/PrivateRoute";
import SystemNotifications from "@components/SystemNotifications";
import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";

export default function App() {
  const { authModalOpen } = useSelector((state) => state.auth);

  return (
    <Router>
      <Navbar />
      <SystemNotifications />
      {authModalOpen && <AuthModal />}
      <Switch>
        <PrivateRoute path={"/dashboard"} fallback={"/"}></PrivateRoute>
      </Switch>
    </Router>
  );
}
