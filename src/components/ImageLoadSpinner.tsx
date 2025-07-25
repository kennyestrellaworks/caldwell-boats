import { useState, type JSX } from "react";
import { FaSpinner } from "react-icons/fa6";

type ImageLoadSpinnerProps = {
  src: string;
  alt: string;
  classNames?: string;
  onClick?: () => void;
};

export const ImageLoadSpinner = ({
  src,
  alt,
  classNames,
  onClick,
}: ImageLoadSpinnerProps): JSX.Element => {
  const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     // Simulate a 2 second loading delay
  //     const timer = setTimeout(() => {
  //       setLoading(false);
  //     }, 2000);

  //     // Cleanup timer on unmount
  //     return () => clearTimeout(timer);
  //   }, []);

  return (
    <>
      {loading && (
        <>
          <div className="absolute w-full h-full inset-0 flex items-center justify-center z-[1000]">
            <FaSpinner className="animate-spin text-blue-600 h-6 w-6" />
          </div>
          <div className="absolute w-full h-full inset-0 flex items-center justify-center bg-gray-200 z-[900]"></div>
        </>
      )}

      <img
        src={src}
        alt={alt}
        className={`object-cover ${
          loading ? "opacity-0" : "opacity-100"
        } ${classNames}`}
        onLoad={() => setLoading(false)}
        onClick={onClick}
      />
    </>
  );
};
