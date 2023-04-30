import { Hero } from "Components/hero";
import { MainContent } from "Components/main-content";
export const Home = () => {
  return (
    <>
      <Hero/>
      <hr className="mx-auto w-1/2 bg-black dark:bg-white" />
      <MainContent />
    </>
  );
};
