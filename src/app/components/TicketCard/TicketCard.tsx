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
    <div className="bg-[#fff] dark:dark:bg-[#3B3E47] shadow-xl drop-shadow-xl">
      <div className="m-4 relative h-[400px] max-w-[400px]">
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
      <div className="relative flex justify-center items-center h-6 w-full overflow-clip">
        <div className="absolute left-[-12px] ml-[-1px] h-6 w-6 rounded-full bg-[rgb(230,230,240)] dark:bg-[rgb(29,28,39)]"></div>
        <div className="h-1 w-full border-t-2 border-dashed border-gray-300"></div>
        <div className="absolute right-[-12px] mr-[-1px] h-6 w-6 rounded-full bg-[rgb(230,230,240)] dark:bg-[rgb(29,28,39)]"></div>
      </div>
      <div className="text-center m-4">
        <h3 className="teamName mb-4 mt-4">{teamName}</h3>
        <h3 className="ticketDate mb-4">{`${date} | ${day} | ${time}`}</h3>
        <h3 className="ticketPlace mb-4">{place}</h3>
        <h3 className="ticketCollection">{collectionType}</h3>
      </div>
    </div>
  );
};
