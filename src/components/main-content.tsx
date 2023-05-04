import { categories } from "../utils/dummydata";

export const MainContent = () => {
  return (
    <section id="maincontent" className="my-6 flex flex-col items-center p-6">
      <h2>Main Content</h2>
      <ul className="mx-auto my-6 flex list-none flex-col justify-center gap-1 md:flex-row md:flex-wrap">
        {categories.map((category) => (
          <li className="flex flex-col items-center rounded-xl border border-solid border-primary bg-primary p-4 md:w-1/4">
            <h3 className="text-center text-2xl text-white">
              {category.name}
            </h3>
          </li>
        ))}
      </ul>
    </section>
  );
};
