import { useState } from "react";
import { ContactForm } from "Components/contact-form";

export const Contact = () => {
  const [showForm, setShowForm] = useState(true);

  return (
    <section
      id="contact"
      className="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-16 p-6"
    >
      <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
        Contact
      </h2>
      {showForm ? (
        <ContactForm setShowForm={setShowForm} />
      ) : (
        <div className="flex flex-col items-center gap-8">
          <p className="flex text-center text-2xl">
            Thank you for contacting me, I will get back to you as soon as
            possible!
          </p>
          <button
            className="w-64 rounded-xl border border-solid border-slate-900 bg-primary p-3 text-white hover:bg-secondary active:bg-tertiary dark:border-none"
            onClick={() => setShowForm(true)}
          >
            Send me another message
          </button>
        </div>
      )}
    </section>
  );
};
