import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import ContactBand from "./components/ContactBand";
import Footer from "./components/Footer";
import ContactSheet from "./components/ContactSheet";
import FeaturedEquipment from "./components/FeaturedEquipment";

function App() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <Header onNeedHelp={() => setContactOpen(true)} />
      <main>
        <Hero onNeedHelp={() => setContactOpen(true)} />
        <Services />
        <FeaturedEquipment />
        <About />
        <ContactBand />
      </main>
      <Footer onNeedHelp={() => setContactOpen(true)}  />
      <ContactSheet open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}

export default App;