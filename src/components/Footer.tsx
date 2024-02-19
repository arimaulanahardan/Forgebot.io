import React from 'react';
import {
    socialMediaLinks,
} from "../constants";


const Footer = () => {
    return (
        <div className="w-full px-8" style={{borderTop: '1px solid white'}}>
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    {socialMediaLinks.map((social) => {
                        return (
                            <div
                                key={social.id}
                                className="p-2 button"
                                onClick={() => window.open(social.link)}
                            >
                                <img src={social.image} alt={social.id} />
                            </div>
                        )
                    })}
                </div>
                <div className="flex items-center">
                    <a href="/term&condition" className="text-dimWhite hover:text-white hover:underline text-[18px] font-normal">Terms & Conditions</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
