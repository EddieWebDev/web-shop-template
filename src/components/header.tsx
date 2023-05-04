import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag, HiOutlineHeart } from "react-icons/hi";
import { RxPerson } from "react-icons/rx";
import { categories } from "../utils/dummydata";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="sticky top-0 z-10 bg-primary text-white">
      <section className="mx-auto flex h-20 items-center justify-between p-2 md:p-4">
        <div className="hidden w-1/4 items-center justify-center gap-4 md:flex lg:text-xl">
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
        </div>

        <div className="flex w-1/6 flex-col md:hidden">
          <nav className="flex items-center justify-center gap-1 md:gap-4">
            <Link
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              to="/"
            >
              <RxPerson />
            </Link>
            <Link
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              to="/"
            >
              <HiOutlineShoppingBag />
            </Link>
            <Link
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              to="/"
            >
              <HiOutlineHeart />
            </Link>
          </nav>
        </div>

        <div className="flex w-4/6 flex-col items-center justify-center md:w-2/4">
          <h1 className="font-serif text-2xl font-medium md:text-4xl lg:text-5xl">
            <Link
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              to="/"
            >
              La Comtesse Atelier
            </Link>
          </h1>
        </div>

        <div className="hidden w-1/4 md:block">
          <nav className="flex items-center justify-center gap-2 text-2xl md:gap-4">
            <Link
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              to="/"
            >
              <RxPerson />
            </Link>
            <Link
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              to="/"
            >
              <HiOutlineShoppingBag />
            </Link>
            <Link
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              to="/"
            >
              <HiOutlineHeart />
            </Link>
          </nav>
        </div>

        <div className="flex w-1/6 items-center justify-center md:hidden">
          <button
            id="hamburger-button"
            className={`relative h-8 w-8 cursor-pointer text-3xl md:hidden ${
              showMenu && "toggle-btn"
            }`}
            onClick={() => setShowMenu((prev) => !prev)}
          >
            <div
              className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-white transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']
              "
            ></div>
          </button>
        </div>
      </section>

      <section className="mx-auto hidden h-20 max-w-4xl items-center justify-center md:flex md:p-4">
        <nav className="flex space-x-8 lg:text-xl" aria-label="categories">
          {categories.map((category) => (
            <Link
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              to={`/${category.name}`}
            >
              {category.name}
            </Link>
          ))}
        </nav>
      </section>

      {showMenu && (
        <section
          id="mobile-menu"
          className="absolute flex min-h-screen w-full origin-top animate-open-menu flex-col bg-white text-3xl text-primary dark:bg-black dark:text-white sm:text-5xl"
          onClick={() => setShowMenu((prev) => !prev)}
        >
          <nav
            className="section-min-height flex flex-col items-center"
            aria-label="mobile"
          >
            <Link
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className="w-full py-4 text-center hover:bg-slate-100 hover:opacity-90 dark:hover:bg-slate-900 sm:py-6"
              to="/"
            >
              Home
            </Link>
            {categories.map((category) => (
              <Link
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
                className="w-full py-4 text-center hover:bg-slate-100 hover:opacity-90 dark:hover:bg-slate-900 sm:py-6"
                to={`/${category.name}`}
              >
                {category.name}
              </Link>
            ))}
          </nav>
        </section>
      )}
    </header>
  );
};
