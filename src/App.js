import NavBar from "./components/navbar";
import BottomNavBar from "./components/bottom-navbar";
import HomePage from "./pages/Home";
import ExtraPage from "./pages/Extra";
import AboutPage from "./pages/About";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/extra" element={<AboutPage />} />
        <Route path="/about" element={<ExtraPage />} />
      </Routes>
      <BottomNavBar />
    </div>
  );
}

export default App;
