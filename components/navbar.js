class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background-color: rgba(17, 24, 39, 0.9);
          backdrop-filter: blur(8px);
          padding: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 50;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .logo {
          color: white;
          font-weight: bold;
          font-size: 1.5rem;
          background: linear-gradient(to right, #3B82F6, #8B5CF6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        ul {
          display: flex;
          gap: 1.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: color 0.2s;
          font-weight: 500;
        }
        a:hover {
          color: #3B82F6;
        }
        .active {
          color: #3B82F6;
        }
      </style>
      <nav>
        <a href="/" class="logo">TechTonic</a>
        <ul></ul>
</nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);