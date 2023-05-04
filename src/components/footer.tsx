import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer id="footer" className="bg-primary text-xl text-white">
      <section className="mx-auto flex max-w-6xl justify-between gap-2 p-4 text-sm sm:text-base lg:text-xl">
        <address className="flex flex-col">
          <span>La Comtesse Atelier</span>
          <span>Stockholm, Sweden</span>
          <span>Email: lacomtesseatelier@gmail.com</span>
          <span>Phone: (+46) 073-1112233</span>
        </address>
        <nav className="hidden flex-col gap-2 md:flex" aria-label="footer">
          <Link
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            to="/contact"
          >
            Contact
          </Link>
          <Link
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            to="/about"
          >
            About
          </Link>
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
