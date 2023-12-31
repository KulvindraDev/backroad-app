import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer class="section footer">
      <ul class="footer-links">
        <li>
          <a href="#home" class="footer-link">home</a>
        </li>
        <li>
          <a href="#about" class="footer-link">about</a>
        </li>
        <li>
          <a href="#services" class="footer-link">services</a>
        </li>
        <li>
          <a href="#featured" class="footer-link">featured</a>
        </li>
      </ul>
      <ul class="footer-icons">
        <li>
          <a href="https://www.facebook.com" target="_blank" class="footer-icon"
            ><i class="fab fa-facebook"></i
          ></a>
        </li>
        <li>
          <a href="https://www.twitter.com" target="_blank" class="footer-icon"
            ><i class="fab fa-twitter"></i
          ></a>
        </li>
        <li>
          <a href="https://www.google.com" target="_blank" class="footer-icon"
            ><i class="fab fa-squarespace"></i
          ></a>
        </li>
      </ul>
      <p class="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
        <h3 style={{ textAlign: "center" }}>
            KULVINDRA SINGH (2100321020094)
        </h3>
      </p>
    </footer>
    </div>
  )
}

export default Footer
