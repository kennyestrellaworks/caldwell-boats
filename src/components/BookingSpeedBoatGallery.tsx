import type { FC } from "react";
import type { SpeedboatsType } from "../data/speedBoats";
import { ImageLoadSpinner } from "./ImageLoadSpinner";

type SpeedboatGalleryProps = {
  boat: SpeedboatsType;
  openSlider: (index: number) => void;
};

export const BookingSpeedBoatGallery: FC<SpeedboatGalleryProps> = ({
  boat,
  openSlider,
}) => {
  return (
    <div className="relative flex flex-col w-full gap-2">
      <div className="relative bg-gray-200 overflow-hidden rounded-lg">
        <div className="relative h-[350px] md3:h-[400px] md4:h-[450px] md5:h-full">
          <ImageLoadSpinner
            src={boat.gallery[0]}
            alt={boat.name}
            classNames={
              "bg-cover w-full h-full transition-transform rounded-lg duration-300 hover:scale-105 cursor-pointer"
            }
            onClick={() => openSlider(0)}
          />
        </div>
      </div>
      <div className="flex w-full">
        <div className="w-full grid grid-cols-4 gap-2 md5:grid-cols-2">
          {boat.gallery.slice(1).map((image, index) => (
            <div
              key={index}
              className="relative w-full h-full overflow-hidden rounded-lg"
            >
              <ImageLoadSpinner
                src={image}
                alt={boat.name}
                classNames={
                  "w-full h-full rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
                }
                onClick={() => openSlider(index + 1)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
