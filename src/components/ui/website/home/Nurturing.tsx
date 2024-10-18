import Button from "@/components/shared/Button";
import Heading from "@/components/shared/Heading";
import Link from "next/link";

const Nurturing = () => {
  return (
    <div className="my-28">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image first on mobile, last on larger screens */}
        <div className="order-first md:order-last">
          <img alt="image" className="w-[100%]" src="/baby-banana.png" />
        </div>

        {/* Text section */}
        <div className="space-y-5 text-center md:text-start">
          <Heading className="">
            Nourish,
            <br />
            Enjoy, Repeat
          </Heading>
          <p>
            We envision a world where parents can focus on enjoying mealtime
            with their babies, knowing they are providing high-quality, fresh
            food that supports healthy development.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-4">
            {[
              "/vegan.png",
              "gluten-free.png",
              "/natural.png",
              "/cruelty-free.png",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <img className="size-[70px] block" src={item} alt="" />
              </div>
            ))}
          </div>
          <br />
          <Link className="mt-12" href={"/products"}>
            <Button className="bg-secondary">View Our Products</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nurturing;
