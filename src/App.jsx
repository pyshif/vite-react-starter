import "@/App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "@/pages/Home";
import AboutPage from "@/pages/About";
import Nav from "@/components/Nav";

export default function App() {
  console.log("import.meta.env :>> ", import.meta.env);
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}
