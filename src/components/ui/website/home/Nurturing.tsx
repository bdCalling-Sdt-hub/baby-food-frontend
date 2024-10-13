import Button from "@/components/shared/Button";
import Heading from "@/components/shared/Heading";
import { CircleCheck } from "lucide-react";

const Nurturing = () => {
  return (
    <div className="mt-28">
      <div className="container grid grid-cols-2 gap-10 items-center">
        <div className="space-y-5">
          <Heading className="">
            Nurturing your <br /> baby&apos;s needs
          </Heading>
          <p>
            We’ve researched hundreds of great-tasting ingredients to find the
            ones that really pack a nutritional punch – so you don’t have to! We
            only use organic ingredients – no nasties! It’s guilt-free goodness!
          </p>
          <div>
            {["100% Organic", "Non gmo", "Wholesome ingredients"].map(
              (item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span>
                    <CircleCheck fill="#89a809" color="#fff" />
                  </span>
                  <span>{item}</span>
                </div>
              )
            )}
          </div>
          <Button className="bg-secondary">View Our Products</Button>
        </div>
        <div className="">
          <img className="w-[100%]" src="/baby-banana.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Nurturing;
