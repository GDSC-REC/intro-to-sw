import "./NothingToSeeHere.css";
import { Link } from "react-router-dom";

export const NothingToSeeHere = () => {
  return (
    <figure id="ntsh">
      <img
        id="ntsh-img"
        src="./src/assets/images/undraw_tree_swing_re_pqee.svg"
        alt="google developer student clubs raghu engineering college logo"
      />
      <figcaption id="ntsh-caption">Oops! Nothing to see here 😅</figcaption>
      <p>Anyway, now that you're here, why not check out our club?</p>
      <a
        className="gdsc-btn"
        href="https://gdsc.community.dev/raghu-engineering-college-visakhapatnam/"
      >
        <span>Explore GDSC REC</span>
        <img
          src="./src/assets/images/google-developers-seeklogo.com.svg"
          alt="google developer student clubs raghu engineering college logo"
        />
      </a>
      <p>New to coding? We got a surprise for you!</p>
      <Link to="/" className="gdsc-btn">
        Open Suprise 🎁
      </Link>
    </figure>
  );
};