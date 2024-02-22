import { 
    Logo
 } from "../assets";
import Button from "../common/components/Button";
import { FaArrowRight } from "react-icons/fa6";
import styles from "../styles";

const CTA = () => {
    return (
        <div
            className="flex flex-col justify-between items-center rounded-lg my-20 mx-10"
            style={{
                background: 'radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(255, 92, 0, 0.20) 0%, rgba(110, 191, 244, 0.04) 77.08%, rgba(70, 144, 212, 0.00) 100%)',
                border: '1px solid #FF5C00',
            }}
        >
            <div className="relative flex flex-col items-center p-2 mt-10 mb-10">
                    <img src={Logo} alt="Logo"className="h-20 w-20" />
                <div className="px-2 sm:w-[800px] w-[300px] items-center mb-6">
                    <h1 className='text-center font-bold text-primaryTextColor sm:text-[35px] text-[25px] leading-7 pt-6 pb-4'>Be Part Of The Future Of Trading</h1>
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