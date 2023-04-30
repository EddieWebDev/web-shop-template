export const About = () => {
  return (
    <section
      id="about"
      className="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-20 p-6"
    >
      <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
        About La Comtesse Atelier
      </h2>
      <div className="flex justify-center mx-auto">
        <button className="w-48 rounded-xl border border-solid border-slate-900 bg-primary p-3 text-white hover:bg-secondary active:bg-tertiary dark:border-none">
          Read more
        </button>
      </div>
    </section>
  );
};
