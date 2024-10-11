import Button from "@/components/shared/Button";

export default function ProductInfo() {
  return (
    <div className="mt-20">
      <div className="container grid grid-cols-2 gap-10 items-center">
        <div className="">
          <img className="w-[90%]" src="/product.png" alt="" />
        </div>
        <div className="space-y-5">
          <div className="animate-bounce">
            <img src="/green_leaf.png" alt="" />
          </div>
          <h2 className="text-5xl text-black font-extrabold tracking-wider">
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
