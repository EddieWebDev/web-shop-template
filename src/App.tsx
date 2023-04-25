import { Footer } from "Components/footer";
import { Header } from "Components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "Pages/home";
import { Rings } from "Pages/rings";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
        <Header />
        <main className="mx-auto max-w-4xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rings" element={<Rings />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
