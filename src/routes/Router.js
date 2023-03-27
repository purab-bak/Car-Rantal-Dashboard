import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SellCar from "../pages/SellCar";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/" element={<SellCar />} />}
      />
      <Route path="/car1" element={<SellCar />} />
      <Route path="/car2" element={<SellCar />} />
      <Route path="/car3" element={<SellCar />} />
      <Route path="/car4" element={<SellCar />} />
    </Routes>
  );
};

export default Router;
