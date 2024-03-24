import { Routes, Route } from "react-router-dom";
import "./App.css";
import CartPage from "./Components/CartPage";
import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar";
import CategoryPage from "./Components/CategoryPage";
import LoginPage from "./Components/Login/LoginPage";
import SignupPage from "./Components/Login/SignupPage";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
