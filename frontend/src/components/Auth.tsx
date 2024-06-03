import { Link } from "react-router-dom";

interface InputBoxProps {
  label: string;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputBox = ({ label, onchange }: InputBoxProps) => {
  return (
    <div className="w-72">
      <div className="relative w-full min-w-[200px] h-10" onChange={onchange}>
        <input
          className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 shadow-lg"
          placeholder=" "
        />
        <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
          {label}
        </label>
      </div>
    </div>
  );
};

export const AuthComponent = ({ type }: { type: "signup" | "signin" }) => {
  return (
    <div className="h-screen flex flex-col justify-center items-center px-16">
      <div className="font-bold text-3xl text-center">Create an account</div>
      <div className="flex flex-row justify-center">
        <div className="text-sm font-thin">
          {type == "signup" ? "Already have an account?" : "New User?"}
        </div>

        <Link
          className="text-sm font-thin ml-1 underline"
          to={type == "signup" ? "/signin" : "/signup"}
        >
          {type == "signup" ? "Login" : "Signup"}
        </Link>
      </div>
      <div className="mt-10  grid gap-8 grid-rows-2">
        <InputBox label="Username" onchange={() => console.log("username")} />
        <InputBox label="Email" onchange={() => console.log("username")} />
        <InputBox label="Password" onchange={() => console.log("username")} />
      </div>
      <button
        type="button"
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none mt-8 focus:ring-4 focus:ring-gray-300 font-medium rounded-2xl text-sm px-20 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        {type == "signup" ? "Sign Up" : "Sign In"}
      </button>
    </div>
  );
};
