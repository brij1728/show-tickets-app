import Image from "next/image";
import React from "react";

interface TicketCardProps {
  image: string;
  teamName: string;
  date: string;
  day: string;
  time: string;
  place: string;
  collectionType: string;
}

export const TicketCard: React.FC<TicketCardProps> = ({
  image,
  teamName,
  date,
  day,
  time,
  place,
  collectionType,
}) => {
  return (
    <div className="drop-shadow-2xl w-[257px]">
      <div className="p-4 bg-[#fff] dark:dark:bg-[#3B3E47]">
        <div className="relative h-[400px]">
          <Image
            src={image}
            alt={teamName}
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex justify-center items-center bg-[#fff] dark:dark:bg-[#3B3E47] drop-shadow-2xl foldable-ticket">
        <div className="h-1 w-full mx-6 dotted-line"></div>
      </div>
      <div className="text-center p-4 bg-[#fff] dark:dark:bg-[#3B3E47]">
        <h3 className="font-medium text-[17px] text-black dark:text-white mb-4">
          {teamName}
        </h3>
        <h3 className="font-normal text-sm  text-[#525965] dark:text-[#DFDFDF] mb-4">{`${date} | ${day} | ${time}`}</h3>
        <h3 className="font-normal text-sm text-[#525965] dark:text-[#DFDFDF] mb-4">
          {place}
        </h3>
        <div className="flex justify-items-center items-center h-9 w-full">
          <h3 className="font-normal text-white bg-[#1D1D1F] dark:bg-black w-full p-3">
            {collectionType}
          </h3>
        </div>
      </div>
    </div>
  );
};
