import CardCount from '../common/components/CardCount';
import { stats } from '../constants';

const CountStat = () => {
    return (
        <section className='w-full flex flex-col justify-center items-center align-middle '>

            <div className='sm:flex grid grid-cols-1 sm:gap-10 gap-4 my-6'>
                {stats.map((stat, i) => (
                    <CardCount
                        key={i}
                        id={stat.id}
                        title={stat.tittle}
                        value={stat.count}
                    />
                ))}
            </div>
        </section>
    )
}

export default CountStat;