"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

import React from "react";
import SwiperCore from "swiper/core";
import { TicketCard } from "../TicketCard";
import { TicketType } from "@/app/types";
import { mockTickets } from "@/app/fixtures/mockTickets.fixture";

SwiperCore.use([Navigation, Pagination]);

export const EventTickets = () => {
  const swiperRef = React.useRef<SwiperRef>(null);
  const prevButtonRef = React.useRef<HTMLDivElement>(null);
  const nextButtonRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="container p-4 bg-gradient-to-r from-white via-gray-200 to-white dark:from-[#18282A] dark:via-[#221A2C] dark:to-[#18282A]">
      <div>
        <h2 className="font-bold text-lg mb-4">Collection Spotlight</h2>
        <h3 className="mb-8">
          Discover extraordinary moments with our Spotlight Collection
          metatickets—exclusive access to premium events for an unforgettable
          experience. Grab yours today!
        </h3>
      </div>
      <div className="flex justify-center flex-row items-center relative mb-4 ">
        <div
          ref={prevButtonRef}
          className="cursor-pointer text-[#2C9CF0] bg-white dark:bg-[#18282A] border border-[#2C9CF0] dark:border-[#18282A] flex w-5 h-5  md:h-10 md:w-10  justify-center items-center mr-1 md:mr-4"
          onClick={() => swiperRef.current?.swiper.slidePrev()}
        >
          <HiOutlineChevronLeft className="h-5 w-5 md:h-10 md:w-10 " />
        </div>
        <Swiper
          ref={swiperRef}
          spaceBetween={2}
          navigation={{
            nextEl: nextButtonRef.current!,
            prevEl: prevButtonRef.current!,
          }}
          autoplay={{ delay: 5000 }}
          loop={true}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          slidesPerView="auto"
          style={{ paddingBottom: "28px" }}
        >
          {mockTickets.map((ticket: TicketType) => (
            <SwiperSlide key={ticket.id} className="max-w-[280px]">
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
        <div
          ref={nextButtonRef}
          className="cursor-pointer text-[#2C9CF0] bg-white dark:bg-[#18282A] border border-[#2C9CF0] dark:border-[#18282A] flex w-5 h-5  md:h-10 md:w-10  justify-center items-center ml-1 md:ml-4"
          onClick={() => swiperRef.current?.swiper.slideNext()}
        >
          <HiOutlineChevronRight className="h-5 w-5 md:h-10 md:w-10" />
        </div>
      </div>
    </div>
  );
};
