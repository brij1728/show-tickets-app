"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Swiper, SwiperSlide } from "swiper/react";

import { AdCard } from "../AdCard";
import { EventCard } from "../EventCard";
import { EventType } from "@/app/types";
import React from "react";
import { mockEvents } from "@/app/fixtures/mockEvents.fixture";

export const TeamEvents = () => {
  return (
    <div className="container text-center sm:text-left justify-center items-center">
      <div className="text-2xl font-medium mb-6">Sports</div>
      <div className="justify-center items-center mb-6">
      <Swiper
        spaceBetween={20}
        slidesPerView={"auto"} 
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 }, 
          768: { slidesPerView: 3 }, 
          1024: { slidesPerView: 4 }, 
        }}
        style={{ paddingBottom: "28px" }}
      >
        {mockEvents.map((event: EventType) => (
          <SwiperSlide key={event.id}>
            <EventCard
              image={event.image}
              teamName={event.teamName}
              totalEvents={event.totalEvents}
              sportName={event.sportName}
            />
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <AdCard
            adImage="/media/images/ad.jpeg"
            title="Advertisement title"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </SwiperSlide>
      </Swiper>
      </div>
      <div className="flex justify-center">
        <button className="font-semibold text-sm text-white bg-[#2C9CF0] rounded px-8 py-3.5">
          See More
        </button>
      </div>
    </div>
  );
};
