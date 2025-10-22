class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          display: none;
        }
</style>
      <footer>
        <div class="footer-content">
          <div class="footer-section">
            <h3>TechTonic</h3>
            <p>Showcasing my technical skills and projects in computer vision, RTL design, and more.</p>
          </div>
          <div class="footer-section">
            <h3>Quick Links</h3>
            <ul style="list-style: none; padding: 0;">
              <li><a href="/">Home</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>Connect</h3>
            <div class="social-links">
              <a href="[Your LinkedIn URL]" target="_blank" aria-label="LinkedIn">
                <i data-feather="linkedin"></i>
              </a>
              <a href="[Your GitHub URL]" target="_blank" aria-label="GitHub">
                <i data-feather="github"></i>
              </a>
              <a href="mailto:your@email.com" aria-label="Email">
                <i data-feather="mail"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="copyright">
          &copy; ${new Date().getFullYear()} TechTonic. All rights reserved.
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);