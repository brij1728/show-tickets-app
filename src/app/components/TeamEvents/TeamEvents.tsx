import { EventCard } from "../EventCard";
import { EventType } from "@/app/types";
import React from "react";
import { mockEvents } from "@/app/fixtures/mockEvents.fixture";
export const TeamEvents = () => {
  return (
    <div className="flex items-start justify-start w-fit">
      {mockEvents.map((event: EventType) => (
        <EventCard
          key={event.id}
          image={event.image}
          teamName={event.sportName}
          totalEvents={event.totalEvents}
          sportName={event.sportName}
        />
      ))}
    </div>
  );
};
