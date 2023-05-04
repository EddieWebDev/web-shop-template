import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";

type Props = {
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
};

type FormData = {
  name: string;
  email: string;
  message: string;
};

export const ContactForm: React.FC<Props> = ({ setShowForm }) => {
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
    <form
      className="items-left mx-auto flex max-w-4xl flex-col gap-4 text-2xl sm:text-3xl"
      onSubmit={handleSubmit(sendEmail)}
    >
      <label className="flex gap-4" htmlFor="name">
        Name:
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
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
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
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
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
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
      <button className="w-48 rounded-xl bg-primary p-3 text-white hover:bg-secondary active:bg-tertiary">
        Submit
      </button>
    </form>
  );
};
