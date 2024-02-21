import { useState } from 'react'
import {
    NavLogo,
} from '../assets'
import { navLinks } from '../constants'
import { FaArrowRight } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import Button from '../common/components/Button';
import styles from '../styles';


const Navbar = () => {

    const [toggle, setToggle] = useState(false)

    return (
        <nav className='w-full flex py-6 sm:px-8 px-4 justify-between items-center navbar' style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.5)' }}>
            <span className='absolute z-1/2 -left-1/3  w-[40%] h-[40%] aspect-square rounded-full animate-pulse circle__gradient' />
            <div className='flex items-center sm:gap-4 gap-1'>
                <img src={NavLogo} alt='#' className='w-[50px] h-[50px] object-contain'
                />
                <h1 className='text-primaryTextColor sm:text-[25px] text-[18px]'>
                    Forget Bot
                </h1>
            </div>

            {/* Desktop View */}
            <div className="item-center flex">
                <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                    {navLinks.map((nav, i) => (
                        <li
                            key={nav.id}
                            className={`${styles.paragraph}
                             ${i === navLinks.length - 1 ? 'mr-0' : 'mr-10'} hover:text-white hover:underline mr-10`}
                        >
                            <a
                                key={i}
                                href={`#${nav.id}`}>
                                {nav.tittle}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <Button
                style="mt-0 flex align-center justify-center"
                title="Docs"
                onClick={() => { console.log('Button Clicked') }}
                icon={<FaArrowRight className='ml-4 mt-1' />}
            />

            {/* Mobile View */}
            <div className="sm:hidden">
                {toggle ? (
                    <IoClose className="text-white w-[28px] h-[28px] object-contain" onClick={() => setToggle(false)} />
                ) : (
                    <HiMenuAlt3 className="text-white w-[28px] h-[28px] object-contain" onClick={() => setToggle(true)} />
                )}
                <div className='absolute top-20 right-0 my-2 w-full rounded-sm'
                    style={{
                        background: 'linear-gradient(313deg, rgba(17, 0, 0, 0.95) 36.78%, rgba(115, 71, 4, 0.85) 136.83%)',
                    }}
                >
                    {toggle && (
                        <ul className="text-center p-4">
                            {navLinks.map(nav => (
                                <li key={nav.id} className="text-white text-xl py-2">
                                    <a href={`#${nav.id}`} onClick={() => setToggle(false)}>
                                        {nav.tittle}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
