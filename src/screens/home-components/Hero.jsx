import "./Hero.css";

export const Hero = () => {
  return (
    <section id="hero">
      <div id="hero-content">
        <main>
          <p>
            try to learn <br />
            how to code <br />
            for 3 weeks. <br />
            you in?
          </p>
          <div>
            <a href="" className="gdsc-btn">
              i'm in
            </a>
            <a href="#hdiw" className="gdsc-btn">
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
