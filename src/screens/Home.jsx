import "./Home.css";
import { Hero } from "./home-components/Hero";
import { Motivation } from "./home-components/Motivation";
import { Footer } from "./reusable-components/Footer";
import { HowDoesItWork } from "./home-components/HowDoesItWork";
import { Disclaimer } from "./home-components/Disclaimer";
import { CantFollowLive } from "./home-components/CantFollowLive";
import { WhatHappensNext } from "./home-components/WhatHappensNext";

export const Home = () => {
  return (
    <>
      <Hero />
      <HowDoesItWork />
      <Motivation />
      <Disclaimer />
      <CantFollowLive />
      <WhatHappensNext />
      <Footer />
    </>
  );
};
