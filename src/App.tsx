import './App.css';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Hero />
      <Features />
      <Products />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
