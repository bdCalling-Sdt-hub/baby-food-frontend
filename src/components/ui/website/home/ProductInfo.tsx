import Button from "@/components/shared/Button";

export default function ProductInfo() {
  return (
    <div className="mt-20">
      <div className="container  grid grid-cols-1 md:grid-cols-2 justify-center gap-10 items-center">
        <div className="">
          <img alt="image" className="w-[90%]" src="/product.png" />
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
            Making mealtimes easy since 2015
          </h2>
          <p className="text-secondary">ORGANIC BABY FOOD</p>
          <p>
            We’ve researched hundreds of great-tasting ingredients to find the
            ones that really pack a nutritional punch – so you don’t have to. We
            only use organic ingredients – no nasties. It’s guilt-free goodness.
          </p>
          <Button className="bg-secondary">View Our Products</Button>
        </div>
      </div>
    </div>
  );
}
