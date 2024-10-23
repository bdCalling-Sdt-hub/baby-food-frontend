"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import { ConfigProvider, Modal } from "antd";

const initial = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Increased stagger duration
    },
  },
};

const animate = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

const ProductCard = ({ food }: { food: any }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="text-center relative w-full h-full md:p-5 rounded-2xl flex flex-col">
      <motion.h2
        initial={initial}
        whileInView={animate}
        className="text-lg h-full md:text-xl poppins font-medium tracking-wide text-[#eb9b9b] my-2"
      >
        {food.title.split(",")[0]}
        <br />
        {food.title.split(",").slice(1).join(",").trim()}
      </motion.h2>
      <motion.img
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 1, ease: "easeInOut" },
        }}
        alt="product"
        className="mx-auto h-[300px] "
        src={food.image}
      />

      <motion.div onClick={() => setShowDetails(true)}>
        <Button className="bg-[#eb9b9b] px-8">Learn More</Button>
      </motion.div>

      <ConfigProvider
        theme={{
          components: {
            Modal: {
              colorIconHover: "red",
            },
          },
        }}
      >
        <Modal
          centered
          footer={false}
          open={showDetails}
          onCancel={() => setShowDetails(false)}
          width={600}
        >
          <motion.div
            className="md:grid space-y-5 grid-cols-2 gap-1"
            initial="hidden"
            animate="visible"
            variants={animate}
          >
            <motion.div variants={animate} className="flex items-center h-full">
              <img
                className="w-full m-auto"
                src={food.image2}
                alt={food.title}
              />
            </motion.div>
            <motion.div variants={animate} className="space-y-5 text-[#eb9b9b]">
              <h2 className="text-xl w-fit mx-auto text-center bg-[#ffe4d8] px-4 py-2 rounded-full">
                {food.title.split(",")[0]}
                <br />
                {food.title.split(",").slice(1).join(",").trim()}
              </h2>
              <p className="text-[12px] tracking-wide">{food.description}</p>
            </motion.div>
          </motion.div>
        </Modal>
      </ConfigProvider>
    </div>
  );
};

export default ProductCard;
