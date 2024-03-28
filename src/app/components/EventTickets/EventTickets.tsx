import React from 'react';
import { TicketCard } from '../TicketCard';
import { TicketType } from '@/app/types';
import { mockTickets } from '@/app/fixtures/mockTickets.fixture';

export const EventTickets = () => {
  return (
    <div className="container flex flex-col items-center justify-center mt-16">
      <div className=" px-4 text-center">
        <h2 className="font-bold text-lg mb-4">Collection Spotlight</h2>
        <h3 className="mb-8">
          Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!
        </h3>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
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
  );
};
