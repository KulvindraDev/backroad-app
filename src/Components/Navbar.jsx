const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src="./images/logo.svg" clasName="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" id="nav-links">
          <li>
            <a href="#home" class="nav-link"> home </a>
          </li>

          <li>
            <a href="#about" class="nav-link"> about </a>
          </li>

          <li>
            <a href="#services" class="nav-link"> services </a>
          </li>

          <li>
            <a href="#tours" class="nav-link"> tours</a>
          </li>
        </ul>

        <ul className="nav-icons">
          <li>
            <a href="https://www.twitter.com" target="_blank" className="nav-icon"
              ><i className="fab fa-facebook"></i
            ></a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" className="nav-icon"
              ><i className="fab fa-twitter"></i
            ></a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" className="nav-icon"
              ><i className="fab fa-squarespace"></i
            ></a>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  )
}

export default Navbar