import Button from "./Button";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProductCard = ({ food }: { food: any }) => {
  return (
    <div className="text-center w-full border p-5 rounded-2xl">
      <img alt="image" className="mx-auto" src={food.image} />
      <h2 className="text-xl">{food.title}</h2>
      <div className="flex justify-center gap-2 my-2">
        {food.ingredients.map((item: string, index: number) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <h2 className="text-xl text-primary">${food.price}.00</h2>
      <Button className="bg-secondary mt-5">View More</Button>
    </div>
  );
};

export default ProductCard;
