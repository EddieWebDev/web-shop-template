export const Footer = () => {
  return (
    <footer id="footer" className="bg-primary text-xl text-white">
      <section className="mx-auto flex max-w-4xl flex-col p-4 sm:flex-row sm:justify-between">
        <address>
          <h2>Eddie Andersson</h2>
          Stora Essingen
          <br />
          Stockholm, Sweden, 11265
          <br />
          Email:{" "}
          <a href="mailto:eddandersson@gmail.com">eddandersson@gmail.com</a>
          <br />
          Phone: <a href="tel:+46732534406">(+46) 073-2534406</a>
        </address>
        <nav className="hidden flex-col gap-2 md:flex" aria-label="footer">
          <a href="#projects" className="hover:opacity-90">
            Projects
          </a>
          <a href="#about" className="hover:opacity-90">
            About me
          </a>
          <a href="#contact" className="hover:opacity-90">
            Contact
          </a>
        </nav>
        <div className="flex flex-col sm:gap-2">
          <p className="text-right">
            Copyright &copy; <span id="year">2023</span>
          </p>
          <p className="text-right">All Rights Reserved</p>
        </div>
      </section>
    </footer>
  );
};
