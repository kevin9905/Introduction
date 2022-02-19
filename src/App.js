import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar.js";
import Header from "./Components/Header";
import AboutMe from "./Components/AboutMe";
import Services from "./Components/Services";
import Experience from "./Components/Experience";
import Testimonials from "./Components/Testimonials";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";
import PortfolioPage from "./Components/PortfolioPage";
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Experience />
      {/* <Testimonials /> */}
      <PortfolioPage />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
