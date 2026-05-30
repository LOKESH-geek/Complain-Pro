import { Link } from "react-router-dom";
import { LayoutDashboard } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10 px-8 py-5 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <LayoutDashboard className="text-cyan-300" />

        <h1 className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          ComplainPro
        </h1>
      </div>

      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/complaints">Complaints</Link>
      </div>
    </nav>
  );
}