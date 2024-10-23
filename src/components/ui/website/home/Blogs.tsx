import BlogCard from "@/components/shared/BlogCard";
import Heading from "@/components/shared/Heading";

export default function Blogs() {
  const blogs = [
    {
      image: "/blog1.png",
      title: "Locally Sourced",
      shortTitle: "Our Ingredients are",
    },
    {
      image: "/blog2.png",
      title: "Fresh Meals",
      shortTitle: "Check our",
    },
    {
      image: "/blog3.png",
      title: "Veggies & Fruits",
      shortTitle: "100% Organic",
    },
  ];
  return (
    <div className="bg-[#e9dfec] text-[#a78aaf] md:py-32 py-5">
      <div className="md:mt-28">
        <div className="container md:grid grid-cols-12 items-start gap-5">
          <div className="col-span-3 my-5">
            <Heading className="text-center md:text-start">
              Farm-Fresh Nutrition <br /> in Every <br /> Bite
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
