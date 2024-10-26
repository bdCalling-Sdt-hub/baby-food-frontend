const AboutPage = () => {
  return (
    <div className="container md:my-6 mt-8">
      <div className="grid grid-cols-1 gap-4 min-h-[calc(100vh-96px)] md:items-center ">
        <div className="space-y-5 md:w-[80%] mx-auto md:text-center">
          <h2 className="text-2xl md:text-6xl oswald md:text-center md:mb-[50px] mb-[20px]">
            About Us
          </h2>
          <p className="">
            As parents ourselves, we understand the challenge of providing
            nutritious meals for our little ones. Many baby foods and snacks are
            filled with unnecessary ingredients, when what babies truly require
            are wholesome, organic foods. When we started our baby on solids, we
            struggled to find the right options. That&apos;s when the idea for
            our frozen purée cubes was born.
          </p>
          <p className="">
            Made from simple, organic ingredients, our purées make mealtime
            effortless and healthy. Every recipe has been carefully tried and
            approved by little ones, inspiring all that we create.
          </p>
          <p className="">
            Our product fills a gap in the market by offering parents a fresh,
            preservative-free alternative to shelf-stable baby food while saving
            them time and effort in meal prep.
          </p>
        </div>
        {/* <div>
          <img className="w-full" src="/men.png" alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default AboutPage;
