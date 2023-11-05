import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <p>
        <a href="" className="footlink">
          GDSC REC
        </a>{" "}
        x{" "}
        <a href="" className="footlink">
          GDSC UI
        </a>
      </p>
      <p>
        website design inspired by{" "}
        <a href="https://buildspace.so/" className="footlink">
          buildspace
        </a>
        ❤️
        <br />
        by{" "}
        <a href="https://linktr.ee/charan_manikanta" className="footlink">
          Charan, GDSC REC
        </a>
      </p>
      <p>this program is not endorsed by Google or the GDSC program in any way</p>
    </footer>
  );
};
