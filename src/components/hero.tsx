import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="widescreen:section-min-height tallscreen:section-min-height my-12 flex scroll-mt-20 p-6 flex-col items-center"
    >
      <h2>Hero</h2>
      <div className="mx-auto flex justify-center">
        <Link to="/about">
          <button className="w-48 rounded-xl border border-solid border-slate-900 bg-primary p-3 text-white hover:bg-secondary active:bg-tertiary dark:border-none">
            Read more
          </button>
        </Link>
      </div>
    </section>
  );
};
