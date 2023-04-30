import { Footer } from "Components/footer";
import { Header } from "Components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "Pages/home";
import { Contact } from "Pages/contact";
import { Category } from "Pages/category";
import { About } from "Pages/about";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
        <Header />
        <main className="mx-auto max-w-6xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:category" element={<Category />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
