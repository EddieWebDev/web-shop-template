import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section id="hero" className="my-6 flex flex-col items-center p-6">
      <h2>Hero</h2>
      <div className="mx-auto my-6 flex justify-center">
        <Link to="/about">
          <button className="w-48 rounded-xl bg-primary p-3 text-white hover:bg-secondary active:bg-tertiary">
            Read more
          </button>
        </Link>
      </div>
    </section>
  );
};
