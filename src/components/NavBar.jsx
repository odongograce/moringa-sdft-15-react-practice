import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container">
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              Expense
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
