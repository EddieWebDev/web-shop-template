import { Hero } from "Components/hero";
import { MainContent } from "Components/main-content";
import { About } from "Components/about";
import { Contact } from "Components/contact";

export const Home = () => {
  return (
    <>
      <Hero />
      <hr className="mx-auto w-1/2 bg-black dark:bg-white" />
      <MainContent />
      <hr className="mx-auto w-1/2 bg-black dark:bg-white" />
      <About />
      <hr className="mx-auto w-1/2 bg-black dark:bg-white" />
      <Contact />
    </>
  );
};
