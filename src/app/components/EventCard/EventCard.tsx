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
    <div className="bg-white shadow-md rounded-md max-w-sm w-64 p-4">
      <a href="#" className="block hover:bg-gray-100 transition duration-300">
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
        <div>
          <div className="p-4">
            <h3 className="teamName mb-2">{teamName}</h3>
            <div className="eventBlock grid grid-cols-2 gap-2">
              <div>
                <h4 className="eventText">Total Events</h4>
                <p className="eventText2">{totalEvents}</p>
              </div>
              <div>
                <h4 className="eventText">Sport</h4>
                <p className="eventText2">{sportName}</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
