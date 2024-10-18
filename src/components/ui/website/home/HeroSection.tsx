import Button from "@/components/shared/Button";
import Navbar from "@/components/shared/Navbar";
import { ArrowRightIcon } from "lucide-react";

export default function HeroSection() {
  return (
    <div>
      <div className="bg-[#F16763] md:h-[90vh]">
        <Navbar />
        <div className="  flex flex-col justify-center items-center relative ">
          <div className="container ">
            <h1 className="text-[80px]  md:text-[200px] text-center leading-relaxed text-[#E13B39] uppercase font-bold">
              Organic Baby Foods
            </h1>
            <img
              className=" w-[250px] md:w-[500px] mt-8 mx-auto absolute  -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2"
              src="/baby-product.png"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center items-center">
        <Button className="bg-black flex items-center gap-3">
          Learn More
          <ArrowRightIcon />
        </Button>
      </div> */}
    </div>
  );
}
