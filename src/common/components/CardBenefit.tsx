import React from 'react';

interface cardBenefitProps {
    id: string;
    title: string;
    description: string;
}

const CardBenefit: React.FC<cardBenefitProps> = ({ id, title, description }) => {
    return (
        <div
            id={id}
            className="w-[400px] flex mb-4 flex-col justify-between items-center pointer-events-none"
        >
            <div className=""
                style={{
                    borderRadius: '0.3125rem 0.3125rem 7.5rem 0.3125rem',
                    border: '2px solid #FF5C00',
                    background: 'radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(255, 92, 0, 0.20) 0%, rgba(110, 191, 244, 0.04) 77.08%, rgba(70, 144, 212, 0.00) 100%)',
                    height: "400px"
                }}>

                <div className='pt-6 w-full pb-6'>
                    <h1 className='font-semibold text-primaryTextColor text-[18px] text-center'>{title}</h1>
                    <div className='w-full p-4 mt-4'>
                        <p className='text-[14px] text-primaryTextColor text-left text-normal text-wrap leading-normal px-6'>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardBenefit;