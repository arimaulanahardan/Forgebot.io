import CardFeature from '../common/components/CardFeature';
import { featureBenefits } from '../constants';
import styles from '../styles';

const Features = () => {
    return (
        <section className='w-full flex flex-col justify-center items-center mb-10 relative'>
            <div className='m-16 mb-5'>
                <h1 className='text-primaryTextColor font-bold text-[40px] text-center w-full '>What sets ForgeBot apart?</h1>
                <p className={`${styles.paragraph} mt-4 w-full text-center px-44 mb-10`}>
                    Dive into the world of ForgeBot and unlock the gateway to your Solana success story!
                </p>
            </div>
            <div className='absolute z-[0] -left-1/2  w-[50%] h-[50%] rounded-full circle__gradient' />
            <div className="grid grid-cols-4 gap-5 px-5">
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
            <div className='px-36 items-center'>
                <div className="grid grid-cols-3 gap-5 px-5">
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
        </section>
    )
}

export default Features;
