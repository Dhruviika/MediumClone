import { ImageGeneration } from "./ImageGeneration";
import { Cloudinary } from "@cloudinary/url-gen/index";
import { AdvancedImage } from "@cloudinary/react";

// const cld = new Cloudinary({
//   cloud: {
//     cloudName: "droyw0akp",
//   },
// });

const DetailedCard = () => {
  return (
    <div className=" bg-gray-300 w-72 h-80">
      {/* <AdvancedImage cldImg={cld.image("pancake")} /> */}
      <div>Blissful Bites</div>
    </div>
  );
};

export const CustomCategory = () => {
  return (
    <>
      <div className="flex flex-col mt-20 ml-20 gap-y-8">
        <div className=" font-bold text-orange-500 text-2xl">
          FOOD & TRAVEL BLOG
        </div>
        <div className="font-bold text-5xl w-1/2">
          Read all the things about Food & Travel in the simple article.
        </div>
      </div>
      <DetailedCard />
    </>
  );
};
