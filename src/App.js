import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Merch from "./components/Merch";
import Events from "./components/Events";
import EventDetail from "./components/EventDetail";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Sponsors from "./components/Sponsors";
import Success from "./components/Success";
import { useState } from "react";
import RegisteredEvents from "./components/RegisteredEvents";
const App = () => {
  const [name, setName] = useState(localStorage.getItem("Name"));
  return (
    <BrowserRouter>
      <Navbar name={name} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/team" element={<Team />} />
        <Route path="/login" element={<Login setName={setName} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/success" element={<Success />} />
        <Route path="/regEvents" element={<RegisteredEvents />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
