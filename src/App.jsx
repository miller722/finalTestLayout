import "./App.css";
import Header from "./components/Header";
import Welcome from "./sections/Welcome";
import AboutUs from "./sections/AboutUs";
import OurWork from "./sections/OurWork";
import OurProcess from "./sections/OurProcess";
import SelectedWork from "./sections/SelectedWork";
import Testimonials from "./sections/Testimonials";
import BrandReview from "./sections/BrandReview";
import Footer from "./components/Footer";
import ContactUs from "./sections/ContactUs";

function App() {
  return (
    <>
      <Header />
      <Welcome />
      <AboutUs />
      <OurWork />
      <OurProcess />
      <SelectedWork />
      <Testimonials />
      <BrandReview />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
