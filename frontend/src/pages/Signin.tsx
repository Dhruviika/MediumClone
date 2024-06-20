import { AuthComponent } from "../components/Auth";

export const Signin = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 bg-custom-bg bg-cover bg-center relative">
      <div className="col-span-2 lg:col-span-2 bg-white rounded-tl-none rounded-tr-[50%] rounded-br-[50%] m-0 p-0">
        <AuthComponent type="signin" />
      </div>
      <div className="col-span-1 lg:col-span-1 bg-transparent">
        <div className="text-3xl font-bold absolute top-0 right-0 mt-5 mr-10 text-white">
          Blogxpress.
        </div>
      </div>
    </div>
  );
};
