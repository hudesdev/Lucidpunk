import react from "react"
import {FaTwitter, FaTelegram, FaDiscord} from "react-icons/fa"

const Connect = () => {
    return (
        <div className='flex text-[#E5E1A8] justify-center w-1/4 max-[1140px]:w-1/2 justify-around max-[1100px]:hidden'>
            <FaTwitter className='mt-3'/>
            <FaTelegram className='mt-3'/>
            <FaDiscord className='mt-3'/>
            <div className='flex w-[184px] justfy-center items-center px-[32px] py-[16px] bg-[#E42B2B] rounded-full border-yellow-300 border-solid border-x-[0.5px] border-t-[1px] border-b-[3px] text-white'>Connect Wallet</div>
        </div>
    )
}

export default Connect