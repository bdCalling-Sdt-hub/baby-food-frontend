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
    <div className="container my-20 md:my-10">
      <Heading className="items-center text-[#eb9b9b] oswald text-center">
        Our New Arrival <br /> Products
      </Heading>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-10 ">
        {foods.map((food, index) => (
          <ProductCard key={index} food={food} />
        ))}
      </div>
    </div>
  );
}
