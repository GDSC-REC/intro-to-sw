import data from "./data.json";
import "./Day.css";

export const Day = ({ dayNum, title, content }) => {
  return (
    <div className="day">
      <h3>day {dayNum}</h3>
      <p>
        <span>{title}</span> <br />
        {content.map((line, i) => {
          return (
            <>
              <span key={i}>{line}</span>
              <br />
            </>
          );
        })}
      </p>
    </div>
  );
};
