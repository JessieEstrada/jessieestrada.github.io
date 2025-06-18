import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Navbar.css";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isMainPage = location.pathname === "/";

  return (
    <nav className="navbar" onMouseLeave={() => setDropdownOpen(false)}>
      <div className="navbar-content">
        <div className="nav-menu-bar">
          <ul className="menu-bar">
            <li id="nav-bar-logo" className="nav-item">
              <Link to="/" onClick={scrollToTop}>
                <img src="/images/JE-Logo.png" alt="Logo" className="nav-logo" />
              </Link>
            </li>

            <li className="nav-item nav-link dropdown" onMouseEnter={() => setDropdownOpen(true)} onClick={() => setDropdownOpen(!dropdownOpen)}>
              <span className="dropdown-toggle">Specialties ▾</span>
              {dropdownOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/software-engineer" onClick={scrollToTop}>
                      Software Engineer
                    </Link>
                  </li>
                  <li>
                    <Link to="/it-support" onClick={scrollToTop}>
                      IT Specialist
                    </Link>
                  </li>
                  <li>
                    <Link to="/data-analyst" onClick={scrollToTop}>
                      Data Analyst
                    </Link>
                  </li>
                  <li>
                    <Link to="/systems-analyst" onClick={scrollToTop}>
                      Systems Analyst
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {!isMainPage && (
              <>
                <li className="nav-item nav-link">
                  <HashLink smooth to="#skills">
                    Skills
                  </HashLink>
                </li>
                <li className="nav-item nav-link">
                  <HashLink smooth to="#projects">
                    Projects
                  </HashLink>
                </li>
                <li className="nav-item nav-link">
                  <HashLink smooth to="#experience">
                    Experience
                  </HashLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
