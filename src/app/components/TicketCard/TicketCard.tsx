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
    <div className="drop-shadow-xl w-[300px]">
      <div className="p-4  bg-[#fff] dark:dark:bg-[#3B3E47]">
        <div className="relative h-[400px] ">
          <Image
            src={image}
            alt={teamName}
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
      <div className="foldable-ticket flex justify-center items-center bg-[#fff] dark:dark:bg-[#3B3E47]">
        <div className="h-1 w-full border-t-2 border-dashed border-gray-300"></div>
      </div>
      <div className="text-center p-4 bg-[#fff] dark:dark:bg-[#3B3E47]">
        <h3 className="font-medium text-[17px] text-black mb-4 mt-4">{teamName}</h3>
        <h3 className="font-normal text-sm  text-black mb-4">{`${date} | ${day} | ${time}`}</h3>
        <h3 className="font-normal text-sm text-[#525965] mb-4">{place}</h3>
        <h3 className="font-normal text-[12.73px]  text-white bg-[#1D1D1F]">{collectionType}</h3>
      </div>
    </div>
  );
};
