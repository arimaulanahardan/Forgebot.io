import CardTestimonial from "../common/components/CardTestimonials"
import { testimonials } from "../constants"
import styles from "../styles"
import {
    TestimonialBackground 
} from "../assets"

const Testimonials = () => {
    return(
        <section
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
                <div className="items-center w-full">
                    <div className="items-center w-full grid grid-cols-3 gap-4">
                        {testimonials.map((testimonial, i) => (
                            <CardTestimonial
                                key={testimonial.id}
                                id={testimonial.id}
                                name={testimonial.name}
                                username={testimonial.username}
                                description={testimonial.description}
                                image={testimonial.image}
                                link = {testimonial.link}
                            />
                        ))}
                    </div>
                </div>
            </div>

        </section>

    )
}

export default Testimonials;