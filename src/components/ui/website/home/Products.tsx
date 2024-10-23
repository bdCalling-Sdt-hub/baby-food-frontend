"use client";
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
    <div className="bg-[#ffe4d8] py-10">
      <div className="container mt-10 ">
        <h1 className="text-[#eb9b9b] text-3xl md:text-6xl text-center">
          Our Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-10 gap-4">
          {foods.slice(0, 3).map((food, index) => (
            <ProductCard key={index} food={food} />
          ))}
        </div>
      </div>
    </div>
  );
}
