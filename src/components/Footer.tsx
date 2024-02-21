import {
    socialMediaLinks,
} from "../constants";


const Footer = () => {
    return (
        <div className="w-full px-8" style={{borderTop: '1px solid white'}}>
            <div className="flex justify-between items-center">
                <div className="flex items-center  w-full">
                    {socialMediaLinks.map((social) => {
                        return (
                            <div
                                key={social.id}
                                className="sm:px-4 button"
                                onClick={() => window.open(social.link)}
                            >
                                <img src={social.image} alt={social.id}

                                />
                            </div>
                        )
                    })}
                </div>
                <div className="flex items-center w-full flex-end justify-end">
                    <a href="/term&condition" className="text-dimWhite hover:text-white hover:underline sm:text-[18px] text-[14px] font-normal">Terms & Conditions</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
