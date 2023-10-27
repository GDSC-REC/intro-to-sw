import "./Home.css";
import { Link } from "react-router-dom";
import { Hero } from "./home-components/Hero";
import { Footer } from "./reusable-components/Footer";

export const Home = () => {
  return (
    <>
      <Hero />
      <Footer />
    </>
  );
};
