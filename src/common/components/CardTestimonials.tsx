import React from 'react';
import {
    Twitter
} from "../../assets"

interface cardTestimonialsProps {
    id: string;
    name: string;
    username: string;
    description: string;
    image: string;
    link: string;
}

const CardTestimonial: React.FC<cardTestimonialsProps> = ({ id, name, username, description, image, link }) => {
    return (
        <div
            id={id}
            className='button w-full flex  cursor-pointer m-4'
            onClick={() => window.open(link, '_blank')}
        >

            <div className="text-center"
                style={{
                    borderRadius: '0.3125rem 0.3125rem 7.5rem 0.3125rem',
                    border: '2px solid #FF5C00',
                    background: 'radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(255, 92, 0, 0.20) 0%, rgba(110, 191, 244, 0.04) 77.08%, rgba(70, 144, 212, 0.00) 100%)',
                }}>
                <div className='p-4 flex'>
                    <img src={image} alt="#"
                        className='justify-start'
                    />
                    <div className=" items-start p-2 ml-4">
                        <h1 className='font-normal text-primaryTextColor text-[18px]'>{name}</h1>
                        <h1 className=' font-normal text-start text-primaryTextColor text-[15px]'>{username}</h1>
                    </div>
                    <div className='w-[195px] flex justify-end'>
                        <img src={Twitter} alt="" className='w-[80px]' />
                    </div>
                </div>
                <div className='pl-4 pr-6 mb-8 w-full '>
                    <div className=' w-full'>
                        <p className='text-primaryTextColor text-[12px] text-left text-wrap leading-normal'>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardTestimonial;