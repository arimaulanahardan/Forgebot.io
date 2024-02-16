import CardBenefit from '../common/components/CardBenefit';
import { benefits } from '../constants';
import styles from '../styles';

const Benefit = () => {
    return (
        <section className='w-full flex flex-col justify-center items-center'
            style={
                {
                    background: 'radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(255, 92, 0, 0.20) 0%, rgba(110, 191, 244, 0.04) 77.08%, rgba(70, 144, 212, 0.00) 100%)',
                    backgroundSize: 'cover',
                }
            }
        >

            <div className='m-10 mb-5'>
                <h1 className='text-white font-montserrat font-bold text-[40px] text-left w-[600px] '>Your Benefit From using our Services</h1>
                <p className={`${styles.paragraph} mt-4 w-[80%]`}>
                Experience the future of trading with ForgeBot, your all-in-one solution across multiple blockchians, offering seamless integration with Telegram for a user-friendly experience and effective communication.
                </p>
            </div>
            <div className='flex gap-6 mx-4'>
                {benefits.map((benefit, i) => (
                    <CardBenefit
                        key={benefit.id}
                        id={benefit.id}
                        title={benefit.tittle}
                        description={benefit.description}
                        link={benefit.link}
                    />
                ))}
            </div>
        </section>
    )
}

export default Benefit;