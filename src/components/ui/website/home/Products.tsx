"use client";
import Button from "@/components/shared/Button";
import Heading from "@/components/shared/Heading";
import { useEffect, useState } from "react";

export default function Products() {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("/fake.json")
      .then((res) => res.json())
      .then((data) => setFoods(data.products));
  }, []);
  return (
    <div className="container">
      <Heading className="items-center">Order our meals today</Heading>
      <div className="grid grid-cols-3 mt-20 gap-10">
        {foods.slice(0, 3).map((food, index) => (
          <div
            key={index}
            className="text-center w-full border p-5 rounded-2xl"
          >
            <img className="mx-auto" src={food.image} alt="" />
            <h2 className="text-xl">{food.title}</h2>
            <div className="flex justify-center gap-2 my-2">
              {food.ingredients.map((item) => (
                <p>{item}</p>
              ))}
            </div>
            <h2 className="text-xl text-primary">${food.price}.00</h2>
            <Button className="bg-secondary mt-5">View More</Button>
          </div>
        ))}
      </div>
    </div>
  );
}
