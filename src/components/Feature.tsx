import { useEffect, useRef, useState } from 'react';
import CardFeature from '../common/components/CardFeature';
import { featureBenefits } from '../constants';
import styles from '../styles';
import { motion } from "framer-motion";

const Features = () => {
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

    const isMobile = window.innerWidth <=  
    950;

    return (
        <section 
        id='about%20us'
        className='w-full flex flex-col justify-center items-center mb-10 relative'>
            <div className='m-16 mb-5'>
                <h1 className='text-primaryTextColor font-bold sm:text-[40px] text-[25px] text-center w-full '>What sets ForgeBot apart?</h1>
                <p className={`${styles.paragraph} mt-4 w-full text-center mb-10`}>
                    Dive into the world of ForgeBot and unlock the gateway to your Solana success story!
                </p>
            </div>
            <span className='absolute z-[0] -left-1/2 aspect-square w-[50%] h-[50%] rounded-full animate-pulse circle__gradient' />

            {isMobile ? (
                <motion.div
                    ref={carouselRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    whileTap={{ cursor: "grabbing" }}
                    className="cursor-grab overflow-hidden w-11/12"
                >
                    <motion.div
                        key={width}
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        className="flex space-x-0"
                    >
                        {featureBenefits.map((feature, i) => (
                            <motion.div
                                key={i}
                                className="min-h-[20rem] min-w-[20rem]"
                            >
                                <CardFeature
                                    key={feature.id}
                                    id={feature.id}
                                    description={feature.description}
                                    image={feature.image}
                                    link={feature.link}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            ) : (
                <div className="w-full px-5">
                    <div className="grid grid-cols-4 gap-5 mb-8">
                        {featureBenefits.slice(0, 4).map((feature, i) => (
                            <CardFeature
                                key={feature.id}
                                id={feature.id}
                                description={feature.description}
                                image={feature.image}
                                link={feature.link}
                            />
                        ))}
                    </div>
                    <div className='px-36 mt-5 items-center'>
                        <div className="grid grid-cols-3 gap-4">
                            {featureBenefits.slice(4).map((feature, i) => (
                                <CardFeature
                                    key={feature.id}
                                    id={feature.id}
                                    description={feature.description}
                                    image={feature.image}
                                    link={feature.link}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Features;
