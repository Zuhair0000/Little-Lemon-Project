import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="App-header">
      <nav>
        <img src="../images/logo.jpg" alt="logo" />

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/reservation">Reserve</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
