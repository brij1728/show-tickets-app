"use client";

import 'swiper/css';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

import React from "react";
import SwiperCore from "swiper/core";
import { TicketCard } from "../TicketCard";
import { TicketType } from "@/app/types";
import { mockTickets } from "@/app/fixtures/mockTickets.fixture";

SwiperCore.use([Navigation, Pagination]);

export const EventTickets = () => {
  return (
    <div className="container mt-16 p-4 bg-gradient-to-b from-white via-gray-200 to-white dark:from-[#18282A] dark:via-[#221A2C] dark:to-[#18282A]">
      <div>
        <h2 className="font-bold text-lg mb-4">Collection Spotlight</h2>
        <h3 className="mb-8">
          Discover extraordinary moments with our Spotlight Collection
          metatickets—exclusive access to premium events for an unforgettable
          experience. Grab yours today!
        </h3>
      </div>
      <Swiper
        spaceBetween={2}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {mockTickets.map((ticket: TicketType) => (
          <SwiperSlide key={ticket.id}>
            <TicketCard
              image={ticket.image}
              teamName={ticket.teamName}
              date={ticket.date}
              day={ticket.day}
              time={ticket.time}
              place={ticket.place}
              collectionType={ticket.collectionType}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
