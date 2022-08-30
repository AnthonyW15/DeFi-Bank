import React from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Devs from "./components/Devs";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Devs />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
