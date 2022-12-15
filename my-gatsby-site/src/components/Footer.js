import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
    <div className="flex flex-col justify-center items-center text-ragal-blue font-bold ">
      <h1 className="text-ragal-blue text-4xl md:text-6xl font-bold">
        Contact Us
      </h1>

      <form
        className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-10 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label htmlFor="first">First name</label>
          <br />
          <input
            type="text"
            id="first"
            className="p-2 border-none border-2 border-ragal-blue rounded-lg"
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
            className="p-2 border-none border-2 border-ragal-blue rounded-lg"
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
            className="p-2 border-none border-2 border-ragal-blue rounded-lg"
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
            className="p-2 border-none border-2 border-ragal-blue rounded-lg"
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
            rows="2"
            cols="25"
            className="p-2 border-none border-2 border-ragal-blue rounded-lg "
            {...register("message")}
          />
          <p>{errors.message?.message}</p>
        </div>
        <br />
        <div>
          <button
            type="submit"
            className="bg-ragal-blue p-3 w-100  rounded-lg text-white font-bold"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Footer;
