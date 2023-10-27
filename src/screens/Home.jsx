import "./Home.css";
import { Hero } from "./home-components/Hero";
import { Motivation } from "./home-components/Motivation";
import { Footer } from "./reusable-components/Footer";

export const Home = () => {
  return (
    <>
      <Hero />
      <Motivation />
      <Footer />
    </>
  );
};
