import Heading from "@/components/shared/Heading";
import { Apple, Droplets, HandPlatter, MapPin } from "lucide-react";

const Ingredient = () => {
  return (
    <div className="container mt-14">
      <Heading className="items-center mb-20">As Fresh As It Gets</Heading>
      <div className="grid grid-cols-12 items-center">
        <div className="col-span-3">
          <div className="flex flex-col gap-5">
            <div className="bg-[#829f01] w-full h-60 rounded-[50px] rounded-br-none relative">
              <div className="flex items-center justify-center h-full w-full">
                <div>
                  <div className=" bg-white w-16 h-16 flex justify-center items-center  rounded-full mx-auto mb-3">
                    <Droplets fill="#829f01" size={40} />
                  </div>
                  <h2 className="text-white text-2xl text-center">
                    Cold pressed <br /> & always fresh
                  </h2>
                </div>
              </div>
            </div>
            <div className="bg-orange-600 w-full h-60 rounded-[50px] rounded-tr-none relative">
              <div className="flex items-center justify-center h-full w-full">
                <div>
                  <div className=" bg-white w-16 h-16 flex justify-center items-center  rounded-full mx-auto mb-3">
                    <HandPlatter fill="#829f01" size={40} />
                  </div>
                  <h2 className="text-white text-2xl text-center">
                    100% recyclable <br /> packaging
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6">
          <img className="mx-auto w-[80%]" src="/image_hero_04.png" />
        </div>
        <div className="col-span-3">
          <div className="flex flex-col gap-5">
            <div className="bg-[#fc7116] w-full h-60 rounded-[50px] rounded-bl-none relative">
              <div className="flex items-center justify-center h-full w-full">
                <div>
                  <div className=" bg-white w-16 h-16 flex justify-center items-center  rounded-full mx-auto mb-3">
                    <Apple fill="#829f01" size={40} />
                  </div>
                  <h2 className="text-white text-2xl text-center">
                    100% Organic <br /> Ingredient
                  </h2>
                </div>
              </div>
            </div>
            <div className="bg-[#f8b413] w-full h-60 rounded-[50px] rounded-tl-none">
              <div className="flex items-center justify-center h-full w-full">
                <div>
                  <div className=" bg-white w-16 h-16 flex justify-center items-center  rounded-full mx-auto mb-3">
                    <MapPin fill="#829f01" size={40} />
                  </div>
                  <h2 className="text-white text-2xl text-center">
                    Small Local <br /> Producer
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ingredient;
