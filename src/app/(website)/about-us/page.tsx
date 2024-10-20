const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <h2 className="text-2xl">About Us</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center">
        <div>
          <p className="mt-5">
            As parents ourselves, we understand the challenge of providing
            nutritious meals for our little ones. Many baby foods and snacks are
            filled with unnecessary ingredients, when what babies truly require
            are wholesome, organic foods. When we started our baby on solids, we
            struggled to find the right options. That&apos;s when the idea for
            our frozen purée cubes was born.
          </p>
          <p className="mt-5">
            Made from simple, organic ingredients, our purées make mealtime
            effortless and healthy. Every recipe has been carefully tried and
            approved by little ones, inspiring all that we create.
          </p>
          <p className="mt-5">
            Our product fills a gap in the market by offering parents a fresh,
            preservative-free alternative to shelf-stable baby food while saving
            them time and effort in meal prep.
          </p>
        </div>
        <div>
          <img src="/about.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
