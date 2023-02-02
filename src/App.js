import HeroSection from "./component/heroSection/HeroSection";
import Commitment from "./component/commitment/Commitment";
import HowItWorks from "./component/howItWorks/HowItWorks";
import OurWork from "./component/ourWork/OurWork";
import Testimonials from "./component/testimonials/Testimonials";
import Footer from "./component/footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <Commitment />
      <HowItWorks />
      <OurWork />
      <Testimonials />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
