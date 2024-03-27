import Image from 'next/image';
import React from 'react';

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
    <div className="bg-white shadow-md rounded-md p-4">
      <div style={{ position: "relative", height: "400px", maxWidth: 400 }}>
        <Image src={image} alt={teamName} fill
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              objectFit: "cover",
        }} />
      </div>
      <div className="text-lg font-semibold">{teamName}</div>
      <div className="text-gray-500 mb-2">{`${day}, ${date} at ${time}`}</div>
      <div className="text-gray-600 mb-2">{place}</div>
      <div className="text-gray-600">{`Collection Type: ${collectionType}`}</div>
    </div>
  );
};