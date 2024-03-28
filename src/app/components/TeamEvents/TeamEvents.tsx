import { AdCard } from "../AdCard";
import { EventCard } from "../EventCard";
import { EventType } from "@/app/types";
import React from "react";
import { mockEvents } from "@/app/fixtures/mockEvents.fixture";
export const TeamEvents = () => {
  return (
    <div className="container " >
      <div className="eventTitle">Sport</div>
      <div className="flex flex-wrap gap-4 mb-8">
      {mockEvents.map((event: EventType) => (
        <EventCard
          key={event.id}
          image={event.image}
          teamName={event.teamName}
          totalEvents={event.totalEvents}
          sportName={event.sportName}
        />
      ))}
      <AdCard adImage="/media/images/ad.jpeg" title="Advertisement title"  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
      </div>

    </div>
  );
};
