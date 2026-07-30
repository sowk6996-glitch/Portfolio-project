import "./App.css";

function Login() {
  const goToTemplates = () => {
    alert("Login Successful!");
    window.location.href = "/templates";
  };

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
          <a href="/login" className="active">
            Login
          </a>
          <a href="/register">Register</a>
        </nav>
      </header>

      <main className="form-page">
        <div className="form-card">
          <h1>Login</h1>

          <form>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
            />

            <button type="button" onClick={goToTemplates}>
              Login
            </button>
          </form>

          <p>
            Don't have an account?{" "}
            <a href="/register">Register</a>
          </p>
        </div>
      </main>

      <footer className="footer">
        © 2026 CodeFolio. All Rights Reserved.
      </footer>
    </>
  );
}

export default Login;
