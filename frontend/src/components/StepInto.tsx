import { ImageGeneration } from "./ImageGeneration";

export const StepInto = () => {
  let Imgs = [];
  Imgs = ImageGeneration({ category: "random", numberofImages: 4 });
  return (
    <div className="m-10">
      <div className="text-6xl font-bold w-2/3 p-14 leading-tight">
        Step into the world of Blogxpress, where our thoughts, stories and ideas
        come to life.
      </div>
      <div className="flex gap-24">
        {Imgs.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="random"
            className="w-72 h-72 rounded-2xl"
          />
        ))}
      </div>
    </div>
  );
};
