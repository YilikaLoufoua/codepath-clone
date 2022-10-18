import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="codepath-logo"/>
      <a href="https://www.codepath.org/about">About</a>
      <a href="https://www.codepath.org/courses">Courses</a>
      <a href="https://www.codepath.org/contact">Contact</a>
    </div>
  );
}

export default Navbar;
