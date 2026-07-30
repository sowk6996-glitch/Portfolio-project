import "./App.css";

function App() {
  return (
    <>
      <header className="navbar">
        <div className="logo">CodeFolio</div>

        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/templates">Templates</a>
          <a href="/pricing">Pricing</a>
          <a href="/contact">Contact</a>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Create Your Developer Portfolio</h1>

          <p>
            Build your professional portfolio in minutes with beautiful
            templates.
          </p>

          <button>Get Started</button>
        </section>

        <section className="features">
          <div className="card">
            <h3>Easy Builder</h3>
            <p>Create your portfolio without coding.</p>
          </div>

          <div className="card">
            <h3>Beautiful Templates</h3>
            <p>Choose modern portfolio themes.</p>
          </div>

          <div className="card">
            <h3>Responsive Design</h3>
            <p>Looks great on mobile and desktop.</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        © 2026 CodeFolio. All Rights Reserved.
      </footer>
    </>
  );
}

export default App;
