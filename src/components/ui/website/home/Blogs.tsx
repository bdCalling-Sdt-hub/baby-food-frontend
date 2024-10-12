import Heading from "@/components/shared/Heading";
import { MoveRight } from "lucide-react";
import Link from "next/link";

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
    <div className="mt-28">
      <div className="container grid grid-cols-12 gap-5">
        <div className="col-span-3">
          <Heading>Healthy food from farm to spoon</Heading>
        </div>
        <div className="col-span-9">
          <div className="grid grid-cols-3 gap-7">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="relative text-white group overflow-hidden"
              >
                <img
                  className="rounded-3xl w-[100%] mx-auto"
                  src={blog.image}
                />
                <div className="absolute -bottom-[500px] group-hover:bottom-0 duration-500 bg-[#f37e2b54] left-0 flex justify-center items-center w-full h-full rounded-3xl">
                  <div>
                    <p className="uppercase tex">{blog.shortTitle}</p>
                    <h2 className="text-2xl">{blog.title}</h2>
                    <Link href="#">
                      <MoveRight color="#fff" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
