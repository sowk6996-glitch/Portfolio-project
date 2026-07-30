import "./App.css";

function Pricing() {
  return (
    <>
      <header className="navbar">
        <div className="logo">CodeFolio</div>

        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/templates">Templates</a>
          <a href="/pricing" className="active">
            Pricing
          </a>
          <a href="/contact">Contact</a>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </nav>
      </header>

      <main className="pricing-page">
        <section className="pricing-hero">
          <h1>Choose Your Plan</h1>
          <p>
            Select the best plan to create your professional developer
            portfolio.
          </p>
        </section>

        <section className="pricing-cards">
          <div className="price-card">
            <h2>Free</h2>
            <h3>₹0</h3>
            <p>Perfect for students and beginners.</p>

            <ul>
              <li>✓ Basic Portfolio Templates</li>
              <li>✓ Responsive Design</li>
              <li>✓ Limited Customization</li>
            </ul>

            <a href="/templates" className="choose-btn">
              Choose Template
            </a>
          </div>

          <div className="price-card popular">
            <h2>Pro</h2>
            <h3>₹499</h3>
            <p>
              For developers who want a professional portfolio.
            </p>

            <ul>
              <li>✓ Premium Templates</li>
              <li>✓ Advanced Customization</li>
              <li>✓ More Portfolio Sections</li>
            </ul>

            <a href="/templates" className="choose-btn">
              Choose Template
            </a>
          </div>

          <div className="price-card">
            <h2>Corporate</h2>
            <h3>₹999</h3>
            <p>
              Best for professional and business portfolios.
            </p>

            <ul>
              <li>✓ Corporate Templates</li>
              <li>✓ Full Customization</li>
              <li>✓ Priority Support</li>
            </ul>

            <a href="/templates" className="choose-btn">
              Choose Template
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        © 2026 CodeFolio. All Rights Reserved.
      </footer>
    </>
  );
}

export default Pricing;
