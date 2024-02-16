import { useState } from 'react'
import {
    // close,
    NavLogo,
    // menu
} from '../assets'
import { navLinks } from '../constants'
import { FaArrowRight } from "react-icons/fa";
import Button from '../common/components/Button';
import styles from '../styles';


const Navbar = () => {

    // const [toggle, setToggle] = useState(false)

    return (
        <nav className='w-full flex py-6 justify-between items-center navbar' style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.5)' }}>
            <div className='absolute z-1/2 -left-1/3  w-[40%] h-[40%] rounded-full circle__gradient' />
            <div className='flex items-center gap-4'>
                <img src={NavLogo} alt='#' className='scale-100'
                />
                <h1 className='text-primaryTextColor text-[25px]'>
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
                            <a href={`#${nav.id}`}>
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
            {/* <div className='sm:hidden flex flex-1 justify-end items-center'>
                <img
                    src={toggle ? close : menu}
                    alt='menu'
                    className='w-[28px] h-[28px] object-contain'
                    onClick={() => setToggle((previous) => !previous)}
                />
                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                    <ul className='list-none flex flex-col justify-end items-center flex-1'>
                        {navLinks.map((nav, i) => (
                            <li
                                key={nav.id}
                                className={`font-montserrat font-normal text-[16px] ${i === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white mr-10`}
                            >
                                <a href={`#${nav.id}`}>
                                    {nav.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                    
                </div>
            </div> */}
        </nav>
    )
}

export default Navbar
