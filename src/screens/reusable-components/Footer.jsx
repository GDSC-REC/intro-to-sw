import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <p style={{ color: "white" }}>devsForFun(❤️)</p>
      <p>
        website design inspired by{" "}
        <a href="https://buildspace.so/" className="footlink">
          buildspace
        </a>
      </p>
      <p>this program is not endorsed by Google, GDSC program, or buildspace in any way</p>
    </footer>
  );
};
