import BlogCard from "@/components/shared/BlogCard";
import Heading from "@/components/shared/Heading";

export default function Blogs() {
  const blogs = [
    {
      image: "/card_image_01.jpg",
      title: "Locally grown",
      shortTitle: "Our Veggies are",
    },
    {
      image: "/card_image_02.jpg",
      title: "Fresh Meals",
      shortTitle: "Check our",
    },
    {
      image: "/card_image_03.jpg",
      title: "Veggies & Fruits",
      shortTitle: "100% Organic",
    },
  ];
  return (
    <div className="bg-[#EBE0EF] md:py-32 py-5">
      <div className="md:mt-28">
        <div className="container md:grid grid-cols-12 gap-5">
          <div className="col-span-3 my-5">
            <Heading className="text-center md:text-start">
              Farm-Fresh Nutrition in Every Bite Or From Farm to Freezer
            </Heading>
          </div>
          <div className="col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
              {blogs.map((blog, index) => (
                <BlogCard key={index} blog={blog} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
