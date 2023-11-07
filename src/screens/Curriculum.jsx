import "./Curriculum.css";
import { Link } from "react-router-dom";
import data from "./curriculum-components/data.json";
import { Day } from "./curriculum-components/Day";
import { Footer } from "./reusable-components/Footer";
import { NavBar } from "./reusable-components/NavBar";

export const Curriculum = () => {
  return (
    <section id="curr">
      <NavBar />
      <h2>here's the plan</h2>
      <div>
        {data.data.map((item) => {
          return <Day dayNum={item.dayNum} title={item.title} content={item.content} />;
        })}
      </div>
      <Footer />
    </section>
  );
};
