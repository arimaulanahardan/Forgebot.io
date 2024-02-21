import CardBenefit from '../common/components/CardBenefit';
import { benefits } from '../constants';
import styles from '../styles';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';


const Benefit = () => {

    const [width, setWidth] = useState(0);
    const carouselRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function updateStateOnResize() {
            if (!carouselRef.current) return;
            const { scrollWidth, offsetWidth } = carouselRef.current;
            setWidth(() => scrollWidth - offsetWidth);
        }

        updateStateOnResize();

        window.addEventListener("resize", updateStateOnResize);
        return () => window.removeEventListener("resize", updateStateOnResize);
    }, []);

    return (
        <section
        id='services'
         className='w-full flex flex-col justify-center items-center'
            style={
                {
                    background: 'radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(255, 92, 0, 0.20) 0%, rgba(110, 191, 244, 0.04) 77.08%, rgba(70, 144, 212, 0.00) 100%)',
                }
            }
        >
            <div className='m-10 mb-5'>
                <h1 className='text-white font-bold sm:text-[40px] text-[25px] sm:text-left text-center sm:w-[600px] w-full'>Your Benefit From using our Services</h1>
                <p className={`${styles.paragraph} mt-4 sm:w-[80%] sm:text-left text-center w-full`}>
                    Experience the future of trading with ForgeBot, your all-in-one solution across multiple blockchians, offering seamless integration with Telegram for a user-friendly experience and effective communication.
                </p>
            </div>
                <div className="md:flex sm:grid grid-cols-1 w-full gap-4">
                    {benefits.map((benefit, i) => (
                        <div key={i} className='button items-center flex justify-center'>
                            <CardBenefit
                                key={benefit.id}
                                id={benefit.id}
                                title={benefit.tittle}
                                description={benefit.description}
                            />

                        </div>
                    ))}
                </div>
        </section>
    )
}

export default Benefit;