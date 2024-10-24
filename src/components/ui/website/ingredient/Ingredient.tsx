"use client";

import { motion } from "framer-motion";
const Ingredient = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };
  return (
    <div className="bg-[#bcd49a] py-36 min-h-screen">
      <div className="container grid grid-cols-1 md:grid-cols-2 justify-center gap-10 items-center">
        <div className="w-full">
          <img alt="image" className="w-full mx-auto" src="/about.png" />
        </div>

        <motion.div
          className="space-y-5 text-center md:text-start"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: false }}
        >
          <div>
            <img
              className="mx-auto md:mx-0 size-24"
              alt="image"
              src="/green_leaf.png"
            />
          </div>

          <motion.h2
            className="text-3xl md:text-5xl text-[#657c1e] oswald font-medium "
            variants={textVariants}
          >
            Wholesome Goodness for Tiny Tastes
          </motion.h2>

          <motion.p className="text-[#5e741d] " variants={textVariants}>
            Our organic baby food cubes are specially crafted to provide the
            highest nutritional value for your little ones. Each cube is made
            from 100% organic fruits and vegetables, carefully selected and
            blended into smooth, flavourful purées. The cubes are then
            flash-frozen to lock in freshness, nutrients, and taste, making them
            a convenient and healthy choice for parents.
          </motion.p>

          {/* Icon Section - No stagger here */}
          <div className="flex items-center justify-center md:justify-start">
            <img
              className="w-[75%] mx-auto md:-mx-5 block"
              src={"/tag.png"}
              alt=""
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Ingredient;
