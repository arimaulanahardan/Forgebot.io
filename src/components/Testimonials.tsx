import CardTestimonial from "../common/components/CardTestimonials"
import { testimonials } from "../constants"
import { TestimonialBackground } from "../assets"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

const Testimonials = () => {
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
    762;
    ;

    return (
        <section
        id="Testimonial"
            className="w-full flex justify-between items-center"
            style={{
                backgroundImage: `url(${TestimonialBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="flex flex-col justify-between items-center p-6">
                <h1 className='text-primaryTextColor font-bold text-[40px] text-center w-full'>
                    Testimonials
                </h1>

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
                            className="flex sm:space-x-12 space-x-6"
                        >
                            {testimonials.map((testimonial, i) => (
                                <motion.div
                                    key={i}
                                    className="min-h-[35rem] min-w-[25rem] sm:min-h-[30rem]"
                                >
                                    <CardTestimonial
                                        key={testimonial.id}
                                        id={testimonial.id}
                                        name={testimonial.name}
                                        username={testimonial.username}
                                        description={testimonial.description}
                                        image={testimonial.image}
                                        link={testimonial.link}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                ) : (
                    <div className="items-center w-full mx-6">
                        <div className="items-center w-full grid grid-cols-3 gap-4">
                            {testimonials.map((testimonial, i) => (
                                <CardTestimonial
                                    key={i}
                                    id={testimonial.id}
                                    name={testimonial.name}
                                    username={testimonial.username}
                                    description={testimonial.description}
                                    image={testimonial.image}
                                    link={testimonial.link}
                                />
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </section>
    )
}

export default Testimonials;
