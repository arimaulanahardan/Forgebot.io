import React from "react";

interface CardFeaturesProps {
    id: string;
    description: string;
    image: string;
    link: string;
}

const CardFeature: React.FC<CardFeaturesProps> = ({ id, description, image, link }) => {
    return (
        <div className=" flex justify-center">
            <div
                id={id}
                className="button flex-col sm:w-full w-[300px] items-center rounded-[8px]"
                style={{
                    background: 'radial-gradient(148.46% 118.2% at 16.76% 32.41%, rgba(255, 92, 0, 0.20) 0%, rgba(56, 13, 3, 0.09) 77.08%, rgba(255, 255, 255, 0.00) 100%)',
                    border: '1px solid #FF5C00'
                }}
            >
                <div className="relative flex flex-col items-center p-2 w-full">
                    <img src={image} alt="#"
                    />
                    <div className="h-[125px] sm:w-full w-[300px] px-2">
                        <h1 className='text-center font-normal text-primaryTextColor sm:text-[18px] text-[14px] pt-6 pb-2 leading-[22px] '>{description}</h1>
                    </div>
                    <a
                        href={link} className='text-secondary sm:w-full w-[300px] text-end px-4 hover:underline'>Learn More {">>"}</a>
                </div>

            </div>
        </div>
    );
}

export default CardFeature;