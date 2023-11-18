import react from 'react'
import { FaClock } from 'react-icons/fa'
import './index.css'

const Hero = () => {
    return (
        <div className='w-full py-[24px] sm:py-[32px] flex flex-col items-center sm:flex-row justify-between sm:items-start border-b-[1px] border-zinc-50/[.1]'>
            <img src="assets/img/Details.png" alt="" className='h-[120px] w-[120px]' />
            <div className='w-full sm:w-[506px] flex flex-col items-center sm:items-start'>
                <div className='text-white text-[24px] sm:text-[32px] font-bold leading-[48px] font-sans'>King Punk 2023 Edition</div>
                <div className='text-[#676A71] text-center sm:text-left text-[18px] font-normal leading-[24px]'>Step into the vast Ether universe by purchasing an Avatar. These characters were opened through Ether Capsules. After purchasing your Avatar, verify your NFT in the official Discord server to join our universe. We look forward to seeing you there.</div>
            </div>
            <div className='w-full sm:h-[148px] sm:w-[337px] flex justify-between items-end mt-3'>
                <div className=''>
                    <div className='text-[14px] text-white font-bold leading-[20px] mb-[8px] font-sans'>Floor</div>
                    <div className='flex mb-[8px]'>
                        <img src="assets/img/Shape.png" alt="" className='h-[24px]' />
                        <div className='text-[#a1a087] text-[18px] font-bold leading-[24px] ml-[8px] font-sans'>11.24SOL</div>
                    </div>
                    <div className='text-[14px] text-white font-bold leading-[20px] mb-[8px] font-sans'>Tickets sales ends in:</div>
                    <div className='flex px-[8px] py-[2px] items-center rounded-[21px] border-[1px] gap-2 backdrop-blur-lg border-slate-400 Hero__revers-clock'>
                        <FaClock className='text-[#E5E1A8] mr-[8px]'></FaClock>
                        <div className='text-white text-[14px] font-semibold leading-[24px] font-sans text-center'>15h : 01m: 02s</div>
                    </div>
                </div>
                <div className=''>
                    <div className='text-[14px] text-white font-bold leading-[20px] mb-[8px] font-sans'>Top Offer</div>
                    <div className='flex mb-[8px]'>
                        <img src="assets/img/Shape.png" alt="" className='h-[24px]' />
                        <div className='text-[#E5E1A8] text-[18px] font-bold leading-[24px] ml-[8px] font-sans'>13.95 SOL</div>
                    </div>
                    <div className='text-[14px] text-white font-bold leading-[20px] mb-[8px] font-sans'>Tickets sales starts in:</div>
                    <div className='text-[#E5E1A8] text-[18px] font-bold leading-[24px] ml-[8px] font-sans'>June 23, 2023</div>
                </div>
            </div>
        </div>
    )
}

export default Hero