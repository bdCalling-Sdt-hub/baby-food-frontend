import { ReactNode } from "react";

export default function Heading({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex flex-col justify-center ${className}`}>
      <div className="animate-bounce">
        <img src="/green_leaf.png" alt="" />
      </div>
      <h2 className="text-5xl text-black font-extrabold tracking-wider">
        {children}
      </h2>
    </div>
  );
}