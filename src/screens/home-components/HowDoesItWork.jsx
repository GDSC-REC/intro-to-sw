import "./HowDoesItWork.css";
import howdoesitwork from "../../assets/images/howdoesitwork.png";
import { Link } from "react-router-dom";

export const HowDoesItWork = () => {
  return (
    <section id="hdiw">
      <img src={howdoesitwork} alt="" />
      <div>
        <h2>how does it work?</h2>
        <div>
          <span id="tag1">beginner</span>
          <span id="tag2">14 hours/week</span>
          <span id="tag3">level: hard</span>
        </div>
        <p>
          7 classes, each followed by a day for practice. you'll build a cool little project at the
          end. <br /> <br />
          day 1: intro <br />
          day 3: writing code <br />
          day 5: programming with javascript <br />
          day 7: javascript for the web <br />
          day 9: set up like a real dev <br />
          day 11: final project <br />
          day 14: what's next? <br />
        </p>
        <Link to="/curriculum" className="gdsc-btn">
          open full plan
        </Link>
      </div>
    </section>
  );
};
