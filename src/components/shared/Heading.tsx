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
      <div className="animate-bounce mx-auto md:mx-0">
        <img alt="image" src="/green_leaf.png" />
      </div>
      <h2 className="text-3xl md:text-5xl text-black font-extrabold tracking-wider">
        {children}
      </h2>
    </div>
  );
}
