export const Footer = () => {
  return (
    <footer id="footer" className="bg-primary text-xl text-white">
      <section className="mx-auto flex max-w-6xl flex-col p-4 sm:flex-row sm:justify-between">
        <address>
          Address
        </address>
        <nav className="hidden flex-col gap-2 md:flex" aria-label="footer">
          Nav
        </nav>
        <div className="flex flex-col sm:gap-2">
          <p className="text-right">
            Copyright &copy; <span id="year">2023</span>
          </p>
          <p className="text-right">All Rights Reserved</p>
        </div>
      </section>
    </footer>
  );
};
