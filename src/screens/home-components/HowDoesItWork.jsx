import "./HowDoesItWork.css";

export const HowDoesItWork = () => {
  return (
    <section id="hdiw">
      <img src="../../assets/images/howdoesitwork.png" alt="" />
      <div>
        <h2>how does it work?</h2>
        <div>
          <span id="tag1">beginner</span>
          <span id="tag2">14 hours/week</span>
          <span id="tag3">level: hard</span>
        </div>
        <p>
          7 classes, each followed by a day for practice. you'll build a cool little project at the
          end.
        </p>
        <a href="" className="gdsc-btn">
          tell me more!
        </a>
      </div>
    </section>
  );
};
