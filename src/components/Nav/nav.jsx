import { useSelector } from "react-redux";
import "./nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  var array = useSelector((state) => state.cReducer.cart);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">

        <Link className="navbar-brand cakenest-brand" to="/">
          <img
            src="/Gemini_Generated_Image_qbxhxhqbxhxhqbxh.png"
            alt="CakeNest Logo"
            className="cakenest-logo"
          />

          <span>CakeNest</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                🏠 Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/cakes" className="nav-link">
                𖠿 Store
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/cart">
                🛒 Cart {array.length}
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Nav;