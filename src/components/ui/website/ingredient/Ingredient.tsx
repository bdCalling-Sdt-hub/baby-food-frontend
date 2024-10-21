const Ingredient = () => {
  return (
    <div className="container my-32">
      <div className=" text-center mx-auto">
        <h1 className="text-[#f8b418] text-3xl md:text-6xl text-center">
          100% Organic Convenient & Nutritious
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 space-y-4 mt-8  items-center">
        <div className="col-span-3">
          <div className="flex flex-col gap-5">
            <div className="bg-[#aae100] w-full h-56 rounded-[50px] rounded-br-none relative">
              <div className="flex items-center justify-center h-full w-full">
                <div>
                  <h2 className="text-white text-2xl text-center">
                    Rich in essential nutrients
                  </h2>
                  <img className="size-[120px] m-auto" src="/ing1.png" alt="" />
                </div>
              </div>
            </div>
            <div className="bg-[#f5a586] w-full h-56 rounded-[50px] rounded-tr-none relative">
              <div className="flex items-center justify-center h-full w-full">
                <div>
                  <h2 className="text-white text-2xl text-center">
                    Smooth and creamy
                  </h2>
                  <img className="size-[120px] m-auto" src="/ing2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6">
          <img
            alt="image"
            className="mx-auto w-[90%] "
            src="/image_hero_04.png"
          />
        </div>
        <div className="col-span-3">
          <div className="flex flex-col gap-5">
            <div className="bg-[#fa9660] w-full h-56 rounded-[50px] rounded-bl-none relative">
              <div className="flex items-center justify-center h-full w-full">
                <div>
                  <h2 className="text-white text-2xl text-center">
                    Pure and flavorful
                  </h2>
                  <img className="size-[120px] m-auto" src="/ing3.png" alt="" />
                </div>
              </div>
            </div>
            <div className="bg-[#fad250] w-full h-56 rounded-[50px] rounded-tl-none">
              <div className="flex items-center justify-center h-full w-full">
                <div>
                  <h2 className="text-white text-2xl text-center">
                    Perfectly balanced for growing babies
                  </h2>
                  <img className="size-[120px] m-auto" src="/ing4.png" alt="" />
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
