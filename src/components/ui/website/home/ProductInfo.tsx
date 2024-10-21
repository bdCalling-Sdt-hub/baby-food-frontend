"use client"; // Ensures the component runs on the client side

import { motion } from "framer-motion";
import Button from "@/components/shared/Button";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
};

export default function ProductInfo() {
  return (
    <div className="bg-[#d1e3b7] py-32">
      <div className="container grid grid-cols-1 md:grid-cols-2 justify-center gap-10 items-center">
        <div className="w-full">
          <img alt="image" className="w-full mx-auto" src="/about.png" />
        </div>

        <motion.div
          className="space-y-5 text-center md:text-start"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.div variants={textVariants}>
            <img
              className="mx-auto md:mx-0 size-24 rotate-[45deg]"
              alt="image"
              src="/green_leaf.png"
            />
          </motion.div>

          <motion.h2
            className="text-3xl md:text-5xl text-[#657c1e] font-extrabold tracking-wider"
            variants={textVariants}
          >
            Wholesome Goodness for Tiny Tastes
          </motion.h2>

          <motion.p
            className="text-[#5e741d] tracking-wide"
            variants={textVariants}
          >
            Our organic baby food cubes are specially crafted to provide the
            highest nutritional value for your little ones. Each cube is made
            from 100% organic fruits and vegetables, carefully selected and
            blended into smooth, flavourful purées. The cubes are then
            flash-frozen to lock in freshness, nutrients, and taste, making them
            a convenient and healthy choice for parents.
          </motion.p>

          {/* Button */}
          <motion.div
            className="flex flex-wrap justify-center md:justify-start items-center gap-5"
            variants={textVariants}
          >
            <Link href="/products">
              <Button className="bg-[#ffe4d8] text-[#5e741d]">
                View Our Products
              </Button>
            </Link>
          </motion.div>

          {/* Icon Section - No stagger here */}
          <div className="flex items-center justify-center md:justify-start gap-4">
            {[
              "/vegan.png",
              "gluten-free.png",
              "/natural.png",
              "/cruelty-free.png",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <img className="size-[70px] block" src={item} alt="" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
