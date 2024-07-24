import Why from "../components/Why";
import About from "../components/About";
import Quotes from "../components/Quotes";
import Hero from "../components/Hero";
import Faq from "../components/Faq";
import Newsletter from "../components/NewsLetter";
import backgroundImage from "../assets/images/background-map.png";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Why />
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <About />
        <Quotes />
        <Faq />
      </div>
      <Newsletter />
    </div>
  );
};

export default Home;
