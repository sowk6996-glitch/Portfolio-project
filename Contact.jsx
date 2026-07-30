import "./App.css";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
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
          <a href="/contact" className="active">
            Contact
          </a>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </nav>
      </header>

      <main className="contact-page">
        <section className="contact-hero">
          <h1>Contact Us</h1>
          <p>
            We'd love to hear from you. Send us your questions or feedback.
          </p>
        </section>

        <section className="contact-container">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>
              <strong>Email:</strong> support@codefolio.com
            </p>
            <p>
              <strong>Phone:</strong> +91 98765 43210
            </p>
            <p>
              <strong>Location:</strong> Bengaluru, Karnataka, India
            </p>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                required
              />

              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              />

              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                placeholder="Enter subject"
                required
              />

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="6"
                placeholder="Write your message here..."
                required
              ></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 CodeFolio. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default Contact;
