import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { MainContent } from "./components/main-content";
import { About } from "./components/about";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
      <Header />
      <main className="mx-auto max-w-4xl">
        <Hero />
        <hr className="mx-auto w-1/2 bg-black dark:bg-white" />
        <MainContent/>
        <hr className="mx-auto w-1/2 bg-black dark:bg-white" />
        <About/>
        <hr className="mx-auto w-1/2 bg-black dark:bg-white" />
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
