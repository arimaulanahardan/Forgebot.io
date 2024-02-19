import { CTABackground,
    Logo
 } from "../assets";
import Button from "../common/components/Button";
import { FaArrowRight } from "react-icons/fa6";
import styles from "../styles";

const CTA = () => {
    return (
        <div
            className="flex flex-col justify-between items-center rounded-[4px] my-20"
            style={{
                background: `url(${CTABackground}) no-repeat center`,
                backgroundSize: "contain",
                height: "350px",
            }}
        >
            <div className="relative flex flex-col items-center p-2 mt-4">
                    <img src={Logo} alt="Logo"className="h-20 w-20" />
                <div className="px-2 w-[800px] items-center mb-6">
                    <h1 className='text-center font-bold text-primaryTextColor text-[35px] pt-6 pb-4'>Be Part Of The Future Of Trading</h1>
                    <p className={`${styles.paragraph} text-center w-full`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales consectetur risus. Fusce aliquam, metus et porta scelerisque, 
                    </p>
                </div>
                <Button
                    style="mt-0 flex"
                    title="Get Started"
                    onClick={() => { console.log('Button Clicked') }}
                    icon = {<FaArrowRight className='ml-4 mt-1'/>}
                />
             
            </div>
        </div>
    );
}

export default CTA;