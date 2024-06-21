import { Navbar } from "../components/Navbar";
import { StepInto } from "../components/StepInto";
import { CustomCategory } from "../components/CustomCategory";

export const Home = () => {
  return (
    <div className="bg-orange-bg bg-cover bg-center h-svh lg:h-svh">
      <Navbar />
      <StepInto />

      {/* <CustomCategory /> */}
    </div>
  );
};
