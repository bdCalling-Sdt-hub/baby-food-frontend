import { useState } from "react";
import Button from "./Button";
import { ConfigProvider, Modal } from "antd";

const ProductCard = ({ food }: { food: any }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="text-center relative w-full h-full md:p-5 rounded-2xl flex flex-col">
      <img
        alt="product"
        className="mx-auto w-[100px] md:w-[300px] h-[200px] md:h-[400px] -mb-8"
        src={food.image}
      />
      <h2 className="text-lg md:text-xl">{food.title}</h2>

      <div className="my-2">
        <p className="font-semibold">Ingredients:</p>
        <div className="flex justify-center flex-wrap items-center gap-2">
          {food.ingredients.map((item: string, index: number) => (
            <div key={index}>
              <p className="text-nowrap text-sm md:text-normal">
                {item}
                {index !== food.ingredients.length - 1 && ","}
              </p>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-xl text-primary">${food.price}.00</h2>

      {/* This div pushes the button to the bottom */}
      <div className="flex-grow"></div>

      {/* The button is at the bottom */}
      <div onClick={() => setShowDetails(true)}>
        <Button className="bg-secondary mt-5">Learn More</Button>
      </div>

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
          width={700}
        >
          <div className="md:grid space-y-5 grid-cols-2 gap-4 p-2">
            <div>
              <img
                className="w-full object-cover bg-red-50 h-[400px]"
                src={food.image}
                alt={food.title}
              />
            </div>
            <div className="space-y-5">
              <h2 className="text-3xl">{food.title}</h2>
              <p className="text-md">{food.description}</p>
              <div className="flex justify-start items-center flex-wrap gap-2 my-2">
                <span className="text-[#f5c639] text-lg font-semibold">
                  Ingredients:{" "}
                </span>
                {food.ingredients.map((item: string, index: number) => (
                  <div key={index}>
                    <p className="text-nowrap">{item}</p>
                  </div>
                ))}
              </div>
              <h2 className="text-5xl text-primary">${food.price}.00</h2>
            </div>
          </div>
        </Modal>
      </ConfigProvider>
    </div>
  );
};

export default ProductCard;
