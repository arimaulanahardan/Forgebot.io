import CardCount from '../common/components/CardCount';
import { stats } from '../constants';

const CountStat = () => {
    return (
        <section className='w-full justify-center items-center sm:px-24 px-8 '>

            <div className='sm:flex grid grid-cols-1 sm:gap-6 gap-4 my-6'>
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