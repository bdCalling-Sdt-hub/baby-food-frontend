import Button from "@/components/shared/Button";
import Link from "next/link";

export default function ProductInfo() {
  return (
    <div className="my-32">
      <div className="container  grid grid-cols-1 md:grid-cols-2 justify-center gap-10 items-center">
        <div className="">
          <img alt="image" className="w-[90%] mx-auto" src="/product.webp" />
        </div>
        <div className="space-y-5 text-center md:text-start">
          <div className="animate-bounce">
            <img
              className="mx-auto md:mx-0"
              alt="image"
              src="/green_leaf.png"
            />
          </div>
          <h2 className="text-3xl md:text-5xl text-black font-extrabold tracking-wider">
            Wholesome Goodness for Tiny Tastes
          </h2>
          <p className="text-secondary">ORGANIC BABY FOOD</p>
          <p>
            Our organic baby food cubes are specially crafted to provide the
            highest nutritional value for your little ones. Each cube is made
            from 100% organic fruits and vegetables, carefully selected and
            blended into smooth, flavourful purées. The cubes are then
            flash-frozen to lock in freshness, nutrients, and taste, making them
            a convenient and healthy choice for parents.
          </p>
          <br />
          <Link className="mt-10" href={"/products"}>
            <Button className="bg-secondary">View Our Products</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
