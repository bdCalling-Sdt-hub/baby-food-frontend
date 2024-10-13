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
    <div className="container">
      <Heading className="items-center text-center">
        {" "}
        Our New Arriver <br /> Products
      </Heading>
      <div className="grid grid-cols-3 mt-20 gap-10">
        {foods.map((food, index) => (
          <ProductCard key={index} food={food} />
        ))}
      </div>
    </div>
  );
}
