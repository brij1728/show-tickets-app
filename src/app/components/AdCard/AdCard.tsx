import Image from "next/image";
import React from "react";

interface AdCardProps {
  adImage: string;
  title: string;
  text: string;
}

export const AdCard: React.FC<AdCardProps> = ({ adImage, title, text }) => {
  return (
    <div className="bg-white shadow-md rounded-md max-w-sm w-64 p-4 relative">
      <div className="absolute top-4 right-4 bg-black text-white font-semibold text-xs px-4 py-1 z-10">
        Ad
      </div>
      <Image src={adImage} alt={title} width={256} height={256} />
      <h3 className="font-semibold text-xl text-[#222D3A] mt-6">{title}</h3>
      <p className="font-normal text-[12.8px] text-[#525965]">{text}</p>
    </div>
  );
};
