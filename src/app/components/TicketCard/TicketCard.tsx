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
      <div className="mt-4">- - - - - - - - - - - - - - - - - - - - - - -</div>
      <div className="text-center">
        <h3 className="ticketTeamName mb-4 mt-4">{teamName}</h3>
        <h3 className="ticketDate mb-4">{`${date} | ${day} | ${time}`}</h3>
        <h3 className="ticketPlace mb-4">{place}</h3>
        <h3 className="ticketCollection">{ collectionType}</h3>
      </div>
    </div>
  );
};