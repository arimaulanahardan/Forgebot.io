import {
    HeroImage,
    HeroBackground,
} from "../assets";
import { socialMediaLinks } from "../constants";
import styles from "../styles";
import Button from "../common/components/Button";

const Hero = () => {
    return (
        <section className="w-full flex justify-between items-center"
            style={{
                backgroundImage: `url(${HeroBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
            <aside className="flex flex-col gap-4 h-full py-36 items-center border-r border-white border-opacity-50">
                {socialMediaLinks.map((social, i) => (
                    <a href={social.link}>
                        <img
                            key={social.id}
                            src={social.image}
                            className="w-[80px] h-[80px] button"
                        />
                    </a>
                ))}
            </aside>
            <div className='px-6 flex flex-row justify-between items-center w-full'>
                <h1 className={`flex-1 ${styles.heading2}`}>
                    Experience{" "}
                    <span className='text-secondary'> The Future of Trading</span> {" "} <span>With <br className='sm:block hiden' />Forge Bot</span> <br className='sm:block hiden' />{" "}
                    <p className={`${styles.paragraph} text-primaryTextColor max-w-[470px] mt-5`}>
                        swift and smooth trading anywhere, anytime, with our user-friendly Telegram bot.
                    </p>
                    <div className="flex gap-12 pt-8">
                        <Button
                            style="mt-0"
                            title="Get Started"
                            onClick={() => { console.log('Button Clicked') }}
                        />
                        <div className="button flex rounded-[2px] px-6 py-2 border border-secondary hover">
                            <a className=" text-[16px] text-center font-normal text-secondary" href="#">
                                Learn More
                            </a>
                        </div>
                    </div>
                </h1>
                <img src={HeroImage} alt="HeroImage" className="w-[550px] object-contain" />
            </div>
            <div className='absolute z-0 -right-1 w-[20%] h-[20%] rounded-full circle__gradient' />
        </section>
    )

}

export default Hero;