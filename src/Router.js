import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/user/:id" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
