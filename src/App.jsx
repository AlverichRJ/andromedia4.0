import HeroSection from "./components/HeroSection";
import AchievementShowcase from "./components/AchievementShowcase";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import About from "./components/About";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <main className="overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased" >
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <Skills />
      <AchievementShowcase />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default App;
