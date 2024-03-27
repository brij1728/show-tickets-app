import React from 'react';
import { TicketCard } from '../TicketCard';
import { TicketType } from '@/app/types';
import { mockTickets } from '@/app/fixtures/mockTickets.fixture';

export const EventTickets = () => {
  return (
    <div className="flex flex-col items-center">
      <div className=" w-full px-4">
        <h2 className="font-bold text-lg text-center mb-4">Collection Spotlight</h2>
        <h3 className="text-center mb-8">
          Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!
        </h3>
      </div>
      <div className="w-full px-4">
        <div className="flex flex-wrap gap-4">
          {mockTickets.map((ticket: TicketType) => (
            <TicketCard
              key={ticket.id}
              image={ticket.image}
              teamName={ticket.teamName}
              date={ticket.date}
              day={ticket.day}
              time={ticket.time}
              place={ticket.place}
              collectionType={ticket.collectionType}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
