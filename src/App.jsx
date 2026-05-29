import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import ComplaintsPage from "./pages/ComplaintsPage";

import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-x-hidden">
      <Toaster position="top-right" />

      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/dashboard"
          element={<DashboardPage />}
        />

        <Route
          path="/complaints"
          element={<ComplaintsPage />}
        />
      </Routes>
    </div>
  );
}