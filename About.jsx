import "./App.css";

function About() {
  return (
    <>
      <header className="navbar">
        <div className="logo">CodeFolio</div>

        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/about" className="active">About</a>
          <a href="/templates">Templates</a>
          <a href="/pricing">Pricing</a>
          <a href="/contact">Contact</a>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </nav>
      </header>

      <main className="about-page">
        <section className="about-hero">
          <h1>About CodeFolio</h1>

          <p>
            CodeFolio helps developers create clean, modern, and responsive
            portfolio websites with ease.
          </p>
        </section>

        <section className="about-content">
          <div className="about-card">
            <h2>Our Mission</h2>

            <p>
              We make it simple for students, beginners, and developers to
              build a professional online presence.
            </p>
          </div>

          <div className="about-card">
            <h2>What We Offer</h2>

            <p>
              Beautiful templates, easy customization, and responsive layouts
              that work on all devices.
            </p>
          </div>

          <div className="about-card">
            <h2>Why Choose Us</h2>

            <p>
              You can launch a portfolio faster without needing advanced design
              or coding knowledge.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        © 2026 CodeFolio. All Rights Reserved.
      </footer>
    </>
  );
}

export default About;
