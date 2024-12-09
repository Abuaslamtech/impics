import { Routes, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import Home from "./pages/Home";
import Generate from "./pages/Generate";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/generate" element={<Generate />} />
      <Route path="/category/:categoryName" element={<CategoryPage />} />
    </Routes>
  );
}

export default App;
