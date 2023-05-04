import { useState } from "react";
import { ContactForm } from "Components/contact-form";

export const Contact = () => {
  const [showForm, setShowForm] = useState(true);

  return (
    <section
      id="contact"
      className="mobile-section-min-height sm:section-min-height my-12 p-6 text-darkpink dark:text-white"
    >
      <h2 className="mb-6 text-center text-4xl font-bold sm:text-5xl">
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
            className="w-48 rounded-xl bg-primary p-3 text-white hover:bg-secondary active:bg-tertiary"
            onClick={() => setShowForm(true)}
          >
            Send me another message
          </button>
        </div>
      )}
    </section>
  );
};
