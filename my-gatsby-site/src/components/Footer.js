import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import * as styles from "../../src/styles/footer.module.css";

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup
    .string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Enter a valid phone number"
    ),
  message: yup.string().required(),
});

function Footer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center bg-slate-800 text-slate-400 ">
      <form
        className="grid md:grid-cols-2 grid-cols-1 gap-8  border-red-600 p-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label htmlFor="first">First name</label>
          <br />
          <input
            type="text"
            id="first"
            className={styles.textfield}
            {...register("firstName")}
          />
          <p>{errors.firstName?.message}</p>
        </div>
        <div>
          <label htmlFor="last">Last name</label>
          <br />
          <input
            type="text"
            id="last"
            className={styles.textfield}
            {...register("lastName")}
          />
          <p>{errors.lastName?.message}</p>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            id="email"
            className={styles.textfield}
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <br />
          <input
            type="tel"
            id="phone"
            className={styles.textfield}
            {...register("phone")}
          />
          <p>{errors.phone?.message}</p>
        </div>
        <div>
          <label htmlFor="message" type="textarea">
            Meassage
          </label>
          <br />
          <textarea
            type="textarea"
            id="message"
            rows="3"
            cols="40"
            className={styles.textarea}
            {...register("message")}
          />
          <p>{errors.message?.message}</p>
        </div>
        <br />
        <div>
          <button type="submit" className={styles.submitbtn}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Footer;
