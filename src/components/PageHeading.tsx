import type { JSX } from "react";

type PageHeadingProps = {
  headingTitle: string;
  headingParagraph: string;
};

export const PageHeading: React.FC<PageHeadingProps> = ({
  headingTitle,
  headingParagraph,
}) => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-primary-800 to-ocean-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
            {headingTitle}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto animate-slide-up">
            {headingParagraph}
          </p>
        </div>
      </div>
    </section>
  );
};
