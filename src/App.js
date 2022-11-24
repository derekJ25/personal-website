import NavBar from "./components/navbar";
import Footer from "./components/footer";
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
        <Route path="/extra" element={<ExtraPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
