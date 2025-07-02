import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Features from "../pages/Features";
import Support from "../pages/Support";
 
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<Features />} />
      <Route path="/support" element={<Support />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
