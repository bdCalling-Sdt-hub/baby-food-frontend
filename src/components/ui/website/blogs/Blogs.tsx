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
    <div className="mt-28">
      <div className="container grid grid-cols-12 gap-5">
        <div className="col-span-3">
          <Heading>Healthy food from farm to spoon</Heading>
        </div>
        <div className="col-span-9">
          <div className="grid grid-cols-3 gap-7">
            {blogs.map((blog, index) => (
              <BlogCard key={index} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
