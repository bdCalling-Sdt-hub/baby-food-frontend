/* eslint-disable @typescript-eslint/no-explicit-any */
import { MoveRight } from "lucide-react";
import Link from "next/link";

const BlogCard = ({ blog }: { blog: any }) => {
  return (
    <div className="relative rounded-3xl text-white group overflow-hidden">
      <img
        alt="image"
        className="rounded-3xl  w-full object-cover h-[440px] mx-auto "
        src={blog.image}
      />
      <div className=" absolute rounded-3xl -bottom-[700px] md:-bottom-[500px] group-hover:bottom-0 duration-500 bg-[#f37e2b54] left-0 flex justify-center items-center w-full h-full">
        <div>
          <p className="uppercase tex">{blog.shortTitle}</p>
          <h2 className="text-2xl">{blog.title}</h2>
          <Link href={`/blogs/${1}`}>
            <MoveRight color="#fff" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
