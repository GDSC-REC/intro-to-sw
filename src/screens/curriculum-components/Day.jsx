import data from "./data.json";
import "./Day.css";
import gdsccolorlogo from "../../assets/stickers/Google_for_Developers_logomark_color.png";

export const Day = ({ dayNum, title, content }) => {
  return (
    <div className="day">
      <div>
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
      <img src={gdsccolorlogo} alt="" />
    </div>
  );
};
