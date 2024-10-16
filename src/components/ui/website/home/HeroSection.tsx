import Button from "@/components/shared/Button";
import Navbar from "@/components/shared/Navbar";
import { HandCoins } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="hero_container bg-center md:bg-top relative">
      <Navbar />

      <div className="container grid grid-cols-1 md:grid-cols-2 items-center h-screen -mt-16 md:-mt-32 px-4 md:px-0">
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <h2 className="text-5xl md:text-7xl text-white font-bold tracking-wider">
            Fresh Meals <br /> For Little Ones
          </h2>

          <div className="flex flex-col md:flex-row items-center mt-6 md:mt-10">
            <div className="border-r md:pr-5 md:mr-5 mb-4 md:mb-0">
              <HandCoins color="#fff" size={70} />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold tracking-wider text-white">
                100% organic
              </h2>
              <p className="text-white text-sm md:text-md">
                All our ingredients come from trusted partner farms{" "}
                <br className="hidden md:block" /> who are EU certified organic
              </p>
            </div>
          </div>

          <Button className="bg-primary mt-6 md:mt-10 w-full md:w-auto">
            Learn More
          </Button>
        </div>

        <div className="mt-10 md:mt-0"></div>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,64L48,90.7C96,117,192,171,288,192C384,213,480,203,576,170.7C672,139,768,85,864,96C960,107,1056,181,1152,181.3C1248,181,1344,107,1392,69.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
