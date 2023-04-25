import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export const Contact = () => {
  const [showForm, setShowForm] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ mode: "onChange" });

  const sendEmail: SubmitHandler<FormData> = (data, e) => {
    e?.preventDefault();
    console.log(e);
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e?.target,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            setShowForm(false);
            reset();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-16 p-6"
    >
      <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
        Contact
      </h2>
      {showForm ? (
        <form
          className="items-left mx-auto flex max-w-4xl flex-col gap-4 text-2xl sm:text-3xl"
          onSubmit={handleSubmit(sendEmail)}
        >
          <label className="flex gap-4" htmlFor="name">
            Name:
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            className="w-full rounded-xl border border-solid border-slate-900 p-3 text-2xl text-black dark:border-none sm:text-3xl"
            {...register("name", {
              required: "Required",
              minLength: 3,
              maxLength: 60,
            })}
          />
          <label className="flex gap-4" htmlFor="email">
            Email:
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            className="w-full rounded-xl border border-solid border-slate-900 p-3 text-2xl text-black dark:border-none sm:text-3xl"
            {...register("email", {
              required: "Required",
              minLength: 3,
              maxLength: 100,
            })}
          />
          <label className="flex gap-4" htmlFor="message">
            Message:
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </label>
          <textarea
            id="message"
            cols={30}
            rows={10}
            placeholder="Your Message"
            className="w-full rounded-xl border border-solid border-slate-900 p-3 text-2xl text-black dark:border-none sm:text-3xl"
            {...register("message", {
              required: "Required",
              minLength: 5,
              maxLength: 2000,
            })}
          ></textarea>
          <button className="w-48 rounded-xl border border-solid border-slate-900 bg-primary p-3 text-white hover:bg-secondary active:bg-tertiary dark:border-none">
            Submit
          </button>
        </form>
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
