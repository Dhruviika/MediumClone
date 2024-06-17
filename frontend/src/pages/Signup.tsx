import { QuoteComponent } from "../components/QuoteComponent";
import { AuthComponent } from "../components/Auth";

export const Signup = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <AuthComponent type="signup" />
      <div className=" invisible lg:visible">
        <QuoteComponent />
      </div>
    </div>
  );
};
