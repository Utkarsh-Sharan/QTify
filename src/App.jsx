import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import AlbumDetailsPage from "./pages/AlbumDetailsPage.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/album" element={<AlbumDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
