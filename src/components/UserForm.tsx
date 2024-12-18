"use client";

import { useActionState } from "react";
import { confirmMyAge } from "@/utils/actions";
import { Action } from "@/types/Action";

const initialState: Action = {
  status: "",
  message: "",
};

export default function UserForm() {
  const [state, formAction, pending] = useActionState(
    confirmMyAge,
    initialState
  );

  return (
    <form action={formAction}>
      {state.status === "ok" && (
        <p className="bg-green-50 text-green-700 font-bold mb-3 sm:mb-5 p-2">
          {state.message}
        </p>
      )}
      {state.status === "ko" && (
        <p className="bg-red-50 text-red-700 font-bold mb-3 sm:mb-5 p-2">
          {state.message}
        </p>
      )}
      <div className="mb-3 sm:mb-5">
        <label
          htmlFor="name"
          className="block mb-0 sm:mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Marco"
          required
        />
      </div>
      <div className="mb-3 sm:mb-5">
        <label
          htmlFor="surname"
          className="block mb-0 sm:mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your surname
        </label>
        <input
          type="text"
          id="surname"
          name="surname"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Rossi"
          required
        />
      </div>
      <div className="mb-3 sm:mb-5">
        <label
          htmlFor="birth"
          className="block mb-0 sm:mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Date of birth
        </label>
        <input
          type="text"
          name="birth"
          id="birth"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="mm/dd/yyyy"
          required
        />
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        disabled={pending}
      >
        Submit
      </button>
    </form>
  );
}
