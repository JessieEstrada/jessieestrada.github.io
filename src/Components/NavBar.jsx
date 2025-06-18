import { useState } from "react";
import { useLocation } from "react-router-dom"; // ⬅️ Import this
import "./Navbar.css";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation(); // ⬅️ Hook to get current route

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Check if you're on the main page ("/")
  const isMainPage = location.pathname === "/";

  return (
    <nav className="navbar" onMouseLeave={() => setDropdownOpen(false)}>
      <div className="navbar-content">
        <div className="nav-menu-bar">
          <ul className="menu-bar">
            <li id="nav-bar-logo" className="nav-item">
              <a href="/" onClick={scrollToTop}>
                <img src="/images/JE-Logo.png" alt="Logo" className="nav-logo" />
              </a>
            </li>
            <li className="nav-item nav-link dropdown" onMouseEnter={() => setDropdownOpen(true)} onClick={() => setDropdownOpen(!dropdownOpen)}>
              <span className="dropdown-toggle">Specialties ▾</span>
              {dropdownOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="/software-engineer" onClick={scrollToTop}>
                      Software Engineer
                    </a>
                  </li>
                  <li>
                    <a href="/it-support" onClick={scrollToTop}>
                      IT Specialist
                    </a>
                  </li>
                  <li>
                    <a href="/data-analyst" onClick={scrollToTop}>
                      Data Analyst
                    </a>
                  </li>
                  <li>
                    <a href="/systems-analyst" onClick={scrollToTop}>
                      Systems Analyst
                    </a>
                  </li>
                </ul>
              )}
            </li>

            {!isMainPage && (
              <>
                <li className="nav-item nav-link">
                  <a href="#skills">Skills</a>
                </li>
                <li className="nav-item nav-link">
                  <a href="#projects">Projects</a>
                </li>
                <li className="nav-item nav-link">
                  <a href="#experience">Experience</a>
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
