import React from "react";
import { BGCardFeatures } from "../../assets";


interface CardFeaturesProps {
    id: string;
    description: string;
    image: string;
    link: string;
}

const CardFeature: React.FC<CardFeaturesProps> = ({ id, description, image, link }) => {
    return (
        <div
            id={id}
            className="button flex flex-col bg-red-500 sm:w-full w-screen justify-between items-center rounded-[4px]"
            style={{
                background: `url(${BGCardFeatures}) no-repeat center`,
                backgroundSize: "contain",
            }}
        >
            <div className="relative flex flex-col items-center p-2 w-full">
                <img src={image} alt="#"
                />
                <div className="h-[125px] px-2">
                    <h1 className='text-center font-normal text-primaryTextColor sm:text-[18px] text-[14px] pt-6 pb-2 leading-[22px] '>{description}</h1>
                </div>
                    <a 
                    href={link} className='text-secondary w-full text-end px-4 hover:underline'>Learn More {">>"}</a>
            </div>

        </div>
    );
}

export default CardFeature;