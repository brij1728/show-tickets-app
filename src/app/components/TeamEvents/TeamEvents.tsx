import { EventCard } from "../EventCard";
import { EventType } from "@/app/types";
import React from "react";
import { events } from "@/app/public";
export const TeamEvents = () => {
  return (
   <div className="flex justify-center items-center h-screen">
    {events.map((event: EventType) => (
      <EventCard
        key={event.id}
        image={`/images/${event.image}`}
        teamName={event.sportName}
        totalEvents={event.totalEvents}
        sportName={event.sportName}
      />
    ))}
    </div>
  );
};
