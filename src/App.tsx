import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import ContactBand from "./components/ContactBand";
import Footer from "./components/Footer";
import ContactSheet from "./components/ContactSheet";

function App() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <Header onNeedHelp={() => setContactOpen(true)} />
      <main>
        <Hero onNeedHelp={() => setContactOpen(true)} />
        <Services />
        <About />
        <ContactBand />
      </main>
      <Footer />
      <ContactSheet open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}

export default App;