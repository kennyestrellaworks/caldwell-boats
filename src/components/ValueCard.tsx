import type { JSX } from "react";

type ValueCardProps = {
  Icon: JSX.Element;
  title: string;
  content: string;
};

export const ValueCard = ({ Icon, title, content }: ValueCardProps) => {
  return (
    <div className="text-center p-6">
      <div className="flex text-5xl justify-center">
        <div className="bg-accent-200 rounded-full p-4">{Icon}</div>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">{title}</h3>
      <p className="text-gray-700 text-xl mt-8">{content}</p>
    </div>
  );
};
