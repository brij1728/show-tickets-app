import Image from "next/image";
import React from "react";

interface EventCardProps {
  image: string;
  teamName: string;
  totalEvents: number;
  sportName: string;
}

export const EventCard: React.FC<EventCardProps> = ({
  image,
  teamName,
  totalEvents,
  sportName,
}) => {
  return (
    <div className="bg-white dark:dark:bg-[#3B3E47] drop-shadow-2xl max-w-sm w-64 p-4 mx-auto">
      <a href="#" className="block transition duration-300">
        <div style={{ position: "relative", height: "400px", maxWidth: 400 }}>
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
        <div className="w-full">
          <h3 className="text-[17px] font-medium my-2">{teamName}</h3>
          <div className="p-2.5 grid grid-cols-2 gap-2 dark:bg-[#292B32] rounded-sm">
            <div>
              <h4 className="text-[#525965] dark:text-[#DFDFDF] text-xs font-normal">
                Total Events
              </h4>
              <p className="font-medium text-sm">{totalEvents} Events</p>
            </div>
            <div>
              <h4 className="text-[#525965] dark:text-[#DFDFDF] text-xs font-normal">
                Sport
              </h4>
              <p className="font-medium text-sm">{sportName}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
