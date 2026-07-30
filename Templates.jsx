import "./App.css";

function Templates() {
  return (
    <>
      <header className="navbar">
        <div className="logo">CodeFolio</div>

        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/templates" className="active">
            Templates
          </a>
          <a href="/pricing">Pricing</a>
          <a href="/contact">Contact</a>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </nav>
      </header>

      <main className="templates-page">
        <section className="template-hero">
          <h1>Choose Your Portfolio Template</h1>
          <p>
            Select a design style that matches your personality and profession.
          </p>
        </section>

        <section className="template-cards">
          <div className="template-card">
            <h2>Minimal</h2>
            <p>
              A clean and simple portfolio design focused on readability and
              professional presentation.
            </p>
            <button>Choose Minimal</button>
          </div>

          <div className="template-card">
            <h2>Cyberpunk</h2>
            <p>
              A futuristic portfolio style with modern visuals, neon effects,
              and creative layouts.
            </p>
            <button>Choose Cyberpunk</button>
          </div>

          <div className="template-card">
            <h2>Corporate</h2>
            <p>
              A professional business-style portfolio suitable for developers
              and companies.
            </p>
            <button>Choose Corporate</button>
          </div>
        </section>
      </main>

      <footer className="footer">
        © 2026 CodeFolio. All Rights Reserved.
      </footer>
    </>
  );
}

export default Templates;
