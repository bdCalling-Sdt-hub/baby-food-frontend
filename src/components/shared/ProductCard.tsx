"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import { ConfigProvider, Modal } from "antd";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const ProductCard = ({ food }: { food: any }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="text-center relative w-full h-full md:p-5 rounded-2xl flex flex-col">
      <img alt="product" className="mx-auto h-[300px] " src={food.image} />
      <motion.h2
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.8 },
        }}
        className="text-lg md:text-xl text-[#eb9b9b] my-2"
      >
        {food.title}
      </motion.h2>

      <motion.div
        whileHover={{
          scale: 1.1,
          textShadow: "0 0 5px rgba(255, 255, 255, 0.5)",
          transition: { duration: 0.3, ease: "circOut" },
        }}
        onClick={() => setShowDetails(true)}
      >
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
            variants={containerVariants}
          >
            <motion.div
              variants={childVariants}
              className="flex items-center h-full"
            >
              <img
                className="w-full m-auto"
                src={food.image2}
                alt={food.title}
              />
            </motion.div>
            <motion.div
              variants={childVariants}
              className="space-y-5 text-[#eb9b9b]"
            >
              <h2 className="text-2xl bg-[#ffe4d8] px-4 py-2 rounded-full">
                {food.title}
              </h2>
              <p className="text-lg tracking-wide">{food.description}</p>
            </motion.div>
          </motion.div>
        </Modal>
      </ConfigProvider>
    </div>
  );
};

export default ProductCard;
