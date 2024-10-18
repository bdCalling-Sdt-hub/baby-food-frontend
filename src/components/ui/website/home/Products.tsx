"use client";
import Heading from "@/components/shared/Heading";
import ProductCard from "@/components/shared/ProductCard";
import { useEffect, useState } from "react";

export default function Products() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("/fake.json")
      .then((res) => res.json())
      .then((data) => setFoods(data.products));
  }, []);

  return (
    <div className="bg-[#FFEBB1] py-10">
      <div className="container mt-10 ">
        <Heading className="items-center text-center">
          Our New Arrival <br /> Products
        </Heading>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-4">
          {foods.slice(0, 4).map((food, index) => (
            <ProductCard key={index} food={food} />
          ))}
        </div>
      </div>
    </div>
  );
}
