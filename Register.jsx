import "./App.css";

function Register() {
  const registerUser = () => {
    alert("Registration Successful!");
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
          <a href="/login">Login</a>
          <a href="/register" className="active">
            Register
          </a>
        </nav>
      </header>

      <main className="form-page">
        <div className="form-card">
          <h1>Create Account</h1>

          <form>
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              required
            />

            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Create password"
              required
            />

            <button type="button" onClick={registerUser}>
              Register
            </button>
          </form>

          <p>
            Already have an account?{" "}
            <a href="/login">Login</a>
          </p>
        </div>
      </main>

      <footer className="footer">
        © 2026 CodeFolio. All Rights Reserved.
      </footer>
    </>
  );
}

export default Register;
