import Image from "next/image";

const BlogDetails = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Header Image */}
      <div className="relative w-full max-w-3xl h-64 bg-yellow-100 flex items-center justify-center rounded-lg overflow-hidden mt-8">
        <Image
          src="/card_image_03.jpg"
          alt="Header Image"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
      </div>

      {/* Blog Content */}
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg mt-6 p-8">
        {/* Author and Date */}
        <div className="flex items-center space-x-3 text-gray-500 mb-4">
          <div>
            <p className="text-xs">September 23, 2024</p>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl  text-[#657C1E] mb-2">
          Day advantages end sufficient eat towards
        </h1>

        {/* Meta Info */}
        <p className="text-sm text-gray-500 mb-4">• 2 Min Read</p>

        {/* Main Content */}
        <p className="text-gray-700 leading-relaxed mb-4">
          Together happy feelings continue juvenile had off one. Unknown may
          service subject her letters one bed. Down has rose feel find man.
          Learning day desirous informed expenses material returned six the.
          Sometimes her behaviour are contented. Do listening am eagerness oh
          objection collected.
        </p>

        <h2 className="text-xl  text-[#657C1E] mb-2">
          Me unpleasing impossible
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Oh acceptance apartments up sympathize astonished delightful. Waiting
          him new lasting towards. Continuing melancholy especially so to. Me{" "}
          <span className="text-blue-600 ">unpleasing impossible</span> in
          attachment announcing so astonished. Mean are sons too sold nor said.
          Son share three men power boy you.
        </p>
      </div>
    </div>
  );
};

export default BlogDetails;
