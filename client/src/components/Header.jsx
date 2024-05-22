import { FaHome, FaQuestion, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="my-4 d-flex justify-content-between align-items-center">
      <Link to="/" className="a">
        <h3 className="lead">NSTA</h3>
      </Link>
      <div className="d-flex gap-4 text-uppercase">
        <Link className="a" to="/">
          <p>
            Home <FaHome />
          </p>
        </Link>
        <Link className="a" to="/contact">
          <p>
            Contact us <FaUser />
          </p>
        </Link>
        <Link className="a" to="/about">
          <p>
            About us <FaQuestion />
          </p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
