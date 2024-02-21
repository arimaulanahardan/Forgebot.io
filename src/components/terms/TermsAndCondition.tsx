import {
    Logo
} from "../../assets";

const TermsAndConditions = () => {
    return (
        <div className="flex flex-col justify-between items-center sm:my-4 my-2 sm:px-20 px-6">
            <div className="relative flex flex-col items-center sm:p-2 sm:mt-4 mt-2 ">
                <div className="sm:px-2 w-full items-center mb-6">
                    <h1 className='text-center font-bold text-primaryTextColor sm:text-[35px] text-[20px] sm:pt-6 p-1'>BY USING FORGEBOT SERVICES </h1>
                    <h1 className='text-center font-bold text-primaryTextColor sm:text-[35px] text-[20px] pb-8'>YOU AGREE TO THE TERMS AND CONDITIONS:</h1>
                    <p className="text-justify w-full text-primaryTextColor sm:text-[18px] text-[14px]">
                        The Forgebot Services Agreement is an agreement between you and Forgebot that governs your use of Forgebot online products and services. The parties of the agreement are “Forgebot and the services that they provide that include, but are not limited to, Telegram bots, channels, groups, and any application created and distributed by Forgebot ” hereinafter called “Forgebot Services” and “The users of these services and applications in telegram and other platforms” hereinafter called “users”.
                    </p>
                </div>
                <img src={Logo} alt="Logo" className="h-60 w-60" />
                <div className="flex items-center flex-col w-full">
                    <div className="my-4">
                        <h1 className="text-center font-semibold text-primaryTextColor sm:text-[25px] text-[18px] pb-4">Limited Liability:</h1>
                        <p className="w-full text-primaryTextColor sm:text-[18px] text-[14px] text-justify ">We strive to regularly update and enhance the content of our service. Despite our diligence, the content may occasionally be incomplete or inaccurate. The materials we provide come with no guarantees or claims regarding their accuracy. These materials are subject to change without prior notice, and we do not assume liability for any typing or programming errors, especially in relation to the prices on our services. We take no responsibility for hyperlinks to third-party websites or services included in our service. Users can track Telegram channels and visit external websites through hyperlinks or buttons, but we have no control over the content and nature of these sites and channels. The inclusion of such links does not imply a recommendation for all the content found on these external sites and channels. Site ownership and content may change without notice, and we cannot guarantee the timely removal of potentially outdated links.When leaving our services, users may encounter different privacy policies and terms on other sites beyond our control. It is advisable to review the Privacy Policies and "Terms of Service" of these external sites before engaging in any business or uploading information. Unless mandated by law, the owners or contributors to ForgeBot Services shall not be liable for any damages, including but not limited to loss of use, profits, or data, arising from the use of ForgeBot Services.</p>
                    </div>
                    <div className="mt-4">
                        <h1 className="text-center font-semibold text-primaryTextColor sm:text-[25px] text-[18px] mb-4">General Disclaimer:</h1>
                        <p className="w-full text-primaryTextColor sm:text-[18px] text-[14px] text-justify ">All ForgeBot services and their contents are presented "as is" and "as available," without any warranties or representations, whether express or implied. ForgeBot functions as a distributor and not a publisher of content provided by third parties. Consequently, ForgeBot exercises no editorial control over such content and does not warrant the accuracy, reliability, or currency of any information, content, service, or merchandise available through or accessible via the ForgeBot Services. Without limiting the above, ForgeBot expressly disclaims all warranties and representations related to any content transmitted on or in connection with the ForgeBot Services, on sites linked through the ForgeBot Services, or in products associated with the ForgeBot Services. This includes, but is not limited to, warranties of merchantability, fitness for a particular purpose, or non-infringement of third-party rights. No oral advice or written information provided by ForgeBot, its affiliates, employees, officers, directors, agents, or similar entities will create a warranty. Price and availability information are subject to change without notice. ForgeBot does not guarantee that the ForgeBot Services will be uninterrupted, uncorrupted, timely, or error-free.</p>
                    </div>

                </div>


            </div>
        </div>
    );
}

export default TermsAndConditions;