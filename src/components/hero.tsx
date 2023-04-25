export const Hero = () => {
  return (
    <section
      id="hero"
      className="widescreen:section-min-height tallscreen:section-min-height mb-12 flex scroll-mt-40 flex-col-reverse items-center justify-center gap-8 p-6 sm:flex-row"
    >
      <article className="sm:w-1/2">
        <h2 className="max-w-md text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-left sm:text-5xl">
          Hi, my name is
          <br />
          <span className="text-indigo-700 dark:text-indigo-300">
            Eddie Andersson
          </span>
          <br />a full stack web developer
        </h2>
        <p className="mt-4 max-w-md text-center text-2xl text-slate-700 dark:text-slate-400 sm:text-left">
          I like to create simple solutions to complex problems.
        </p>
        <p className="mt-4 max-w-md text-center text-2xl text-slate-700 dark:text-slate-400 sm:text-left">
          Think user friendly.
        </p>
      </article>
      <img className="w-1/2" src="/img/rocketdab.png" alt="RocketDab" />
    </section>
  );
};
