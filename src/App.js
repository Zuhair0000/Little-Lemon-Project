import "./App.css";
import Header from "./Header.js";
import HomePage from "./HomePage.js";
import Footer from "./Footer.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Menu.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
