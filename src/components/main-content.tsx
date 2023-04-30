import { categories } from "../utils/dummydata";

export const MainContent = () => {
  return (
    <section
      id="categories"
      className="widescreen:section-min-height tallscreen:section-min-height my-12 flex scroll-mt-20 flex-col items-center justify-center p-6"
    >
      <h2>Main Content</h2>
      <ul className="mx-auto my-12 flex list-none flex-col flex-wrap justify-center gap-1 md:flex-row">
        {categories.map((category) => (
          <li className="flex w-1/4 flex-col items-center rounded-xl border border-solid border-primary bg-primary p-4">
            <img
              src="/img/rocketman.png"
              alt="rocketman"
              className="mb-6 w-1/2"
            />
            <h3 className="text-center text-3xl text-slate-900 dark:text-white">
              {category.name}
            </h3>
          </li>
        ))}
      </ul>
    </section>
  );
};
