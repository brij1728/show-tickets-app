import Image from 'next/image'
import React from 'react'

interface AdCardProps {
	adImage: string;
	title: string;
	text: string;
}
export const AdCard: React.FC<AdCardProps> = ({ adImage, title, text}) => {
  return (
	<div style={{ position: "relative", height: "556.5px", maxWidth: 256 }} className="bg-white shadow-md rounded-md max-w-sm w-64 p-4">
	  <Image src={adImage} alt={title} width={256} height={256} 
            />
	  <h3 className="adTitle pt-8">{title}</h3>
	  <p className="adText">{text}</p>
	</div>
  )
}
