import { useParams } from "react-router-dom";

export const Category = () => {
  const { category } = useParams();

  return (
    <section
      id="about"
      className="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-20 p-6"
    >
      <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
        {category}
      </h2>
    </section>
  );
};
