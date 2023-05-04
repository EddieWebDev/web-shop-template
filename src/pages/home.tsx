import { Hero } from "Components/hero";
import { MainContent } from "Components/main-content";
export const Home = () => {
  return (
    <section
      id="home"
      className="mobile-section-min-height sm:section-min-height my-12 p-6 text-darkpink dark:text-white"
    >
      <h2 className="mb-6 text-center text-4xl font-bold sm:text-5xl">Home</h2>
      <Hero />
      <hr className="mx-auto w-1/2 bg-black dark:bg-white" />
      <MainContent />
    </section>
  );
};
