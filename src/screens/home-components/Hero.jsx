import "./Hero.css";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section id="hero">
      <nav id="hero-nav">
        <img
          src="/src/assets/logos/GDSC-REC-Logo-chapter-lockup.svg"
          alt="google developer studnet clubs raghu engineering college logo"
        />
        <div id="nav-btns">
          {/* <button className="gdsc-btn"></button> */}
          <Link to="/about" className="gdsc-btn">
            About
          </Link>
        </div>
      </nav>

      <div id="hero-content">
        <main>
          <p>
            try to learn <br />
            how to code <br />
            for 2 weeks. <br />
            you in?
          </p>
          <div>
            <a href="" className="gdsc-btn">
              i'm in
            </a>
            <a href="" className="gdsc-btn">
              tell me more
            </a>
          </div>
        </main>
        <aside>
          <div id="rajput">
            <p>"i want to win a hackathon"</p>
          </div>
          <div id="maurya">
            <p>"i want to create a web app"</p>
          </div>
          <div id="gupta">
            <p>"i want to get a job"</p>
          </div>
          <div id="chanukya">
            <p>"i want to freelance and travel"</p>
          </div>
        </aside>
      </div>
    </section>
  );
};
