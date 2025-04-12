import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GamesPage from "./pages/GamesPage"; // Nouvelle page des jeux
import StoriesPage from "./pages/StoriesPage";
import MissionsPage from "./pages/MissionsPage"; // en haut avec les imports
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ParentPage from "./pages/Parent";
import DashboardPage from "./pages/DashboardPage";
import StoryReader from "./pages/StoryReader";






function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/stories" element={<StoriesPage />} /> {/* Page des histoires */}
        <Route path="/missions" element={<MissionsPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/parent" element={<ParentPage />} />
        <Route path="/story/:id" element={<StoryReader />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}


export default App;

