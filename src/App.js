import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar.js";
import Header from "./Components/Header";
import AboutMe from "./Components/AboutMe";
import Services from "./Components/Services";
import Experience from "./Components/Experience";
import Portfolio from "./Components/Portfolio";
import Testimonials from "./Components/Testimonials";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Experience />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
