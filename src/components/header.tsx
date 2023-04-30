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
        <div className="hidden w-1/4 items-center justify-center gap-4 md:flex">
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
        </div>
        <div className="flex w-1/6 flex-col md:hidden">
          <nav className="text-md flex items-center justify-center gap-1 md:gap-4">
            <Link to="/rings">
              <RxPerson />
            </Link>
            <Link to="/rings">
              <HiOutlineShoppingBag />
            </Link>
            <Link to="/rings">
              <HiOutlineHeart />
            </Link>
          </nav>
        </div>
        <div className="flex w-4/6 flex-col items-center justify-center md:w-2/4">
          <h1 className="text-2xl font-medium md:text-4xl lg:text-5xl">
            <Link to="/">La Comtesse Atelier</Link>
          </h1>
        </div>
        <div className="hidden w-1/4 md:block">
          <nav className="flex items-center justify-center gap-2 text-2xl md:gap-4">
            <Link to="/rings">
              <RxPerson />
            </Link>
            <Link to="/rings">
              <HiOutlineShoppingBag />
            </Link>
            <Link to="/rings">
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
      <section className="mx-auto flex max-w-4xl items-center justify-center md:p-4">
        <nav
          className="text xl hidden space-x-8 md:block"
          aria-label="categories"
        >
          {categories.map((category) => (
            <Link to={`/${category.name}`}>{category.name}</Link>
          ))}
        </nav>
      </section>
      {showMenu && (
        <section
          id="mobile-menu"
          className="top-68 absolute flex w-full origin-top animate-open-menu flex-col justify-center bg-black text-5xl"
          onClick={() => setShowMenu((prev) => !prev)}
        >
          <nav
            className="flex min-h-screen flex-col items-center py-8"
            aria-label="mobile"
          >
            <Link className="w-full py-6 text-center hover:opacity-90" to="/">
              Home
            </Link>
            {categories.map((category) => (
              <Link
                className="w-full py-6 text-center hover:opacity-90"
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
