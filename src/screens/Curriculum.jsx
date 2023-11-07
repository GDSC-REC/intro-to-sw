import "./Curriculum.css";
import { Link } from "react-router-dom";
import data from "./curriculum-components/data.json";
import { Day } from "./curriculum-components/Day";

export const Curriculum = () => {
  return (
    <section id="curr">
      <h2>Curriculum</h2>
      <div>
        {console.log(data)}
        {data.data.map((item) => {
          return <Day dayNum={item.dayNum} title={item.title} content={item.content} />;
        })}
      </div>
    </section>
  );
};
