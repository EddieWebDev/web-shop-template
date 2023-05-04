import { useParams } from "react-router-dom";

export const Category = () => {
  const { category } = useParams();

  return (
    <section
      id="category"
      className="mobile-section-min-height md:section-min-height my-4 p-6 text-darkpink dark:text-white md:my-12"
    >
      <h2 className="mb-6 text-center text-4xl font-bold sm:text-5xl">
        {category}
      </h2>
    </section>
  );
};
