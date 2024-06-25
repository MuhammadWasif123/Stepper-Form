"use client";
import React, { useState } from "react";
import Image from "next/image";
import LockIcon from "../../../../public/lock_icon.svg"
import {useRouter} from "next/navigation"

const SecondPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    password: "",
  });

  const router=useRouter();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be numeric";
    }
    if (!formData.message) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted", formData);
      router.push("/thirdpage")
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="progressbar">
        <div className="w-[60%]"
        ></div>
      </div>
      <div className="flex flex-col items-center w-full">
        <h2 className="text-[#051011] text-2xl text-center font-semibold mb-4">
          Step # 2
        </h2>
        <h2 className="text-2xl mb-2 font-semibold">Details</h2>

        <p className="text-center text-[#6B7280] text-base w-[43%] mb-4">
          We’re thrilled at the opportunity to help you grow your business
          online. Please let us know the best way to reach you.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded px-8 pt-6 pb-8 mb-4 max-w-lg w-full"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-[16px] px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.name ? "border-red-500" : ""
            }`}
            placeholder=""
            required
          />
          {errors.name && (
            <p className="text-red-500 text-xs italic">{errors.name}</p>
          )}
        </div>
        <div className="flex w-full justify-center gap-x-4">
          <div className="w-1/2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.email ? "border-red-500" : ""
              }`}
              placeholder=""
              required
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">{errors.email}</p>
            )}
          </div>
          <div className="w-1/2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.phone ? "border-red-500" : ""
              }`}
              placeholder=""
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2 mt-4"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight resize-none focus:outline-none focus:shadow-outline ${
              errors.message ? "border-red-500" : ""
            }`}
            placeholder=""
            rows="4"
            required
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-xs italic">{errors.message}</p>
          )}
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-[#019F44] hover:bg-[#019F44] text-sm text-white font-semibold py-[13px] px-6  focus:outline-none focus:shadow-outline"
          >
            Send Request
          </button>
        </div>
      </form>

      <div className="flex justify-center gap-[10px]">
        <Image src={LockIcon} className="w-6"  />
        <p className="text-[#6B7280] text-base">We promise never to share your information or spam your inbox</p>
      </div>
    </div>
  );
};

export default SecondPage;
