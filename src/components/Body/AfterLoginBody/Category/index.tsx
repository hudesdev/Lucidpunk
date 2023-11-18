import react from 'react'
import HeroCard from '../../../Widgets/HeroCard'

const Category = ()=> {
    return (
        <div className='mt-[32px] flex flex-col sm:flex-row justify-between w-full'>
            
            <div className='w-full gap-2 sm:w-2/3 flex sm:grid sm:grid-cols-3 sm:gap-4 overflow-hidden'>
                <HeroCard/>
                <HeroCard/>
                <HeroCard/>
                <HeroCard/>
                <HeroCard/>
                <HeroCard/>
                <HeroCard/>
                <HeroCard/>
            </div>
            <div className='w-[353px] '>
                <div className='flex p-[24px] flex-col items-center gap-[24px] self-stretch border-y-[1px] sm:rounded-[32px] sm:border-[1px] border-[#292C31] bg-[#484848]/[.08]'>
                    <p className='text-white text-center text-[32px] font-bold leading-[48px]'>Start to raffle</p>
                    <p className='w-[345px] text-[#676A71] text-center text-[18px] leading-[24px] font-normal '>You can enter the raffle by connecting you solana wallet</p>
                    <div className='flex w-full justify-center items-center px-[32px] py-[16px] bg-[#E42B2B] rounded-full border-yellow-300 border-solid border-x-[0.5px] border-t-[1px] border-b-[3px]  text-white'>Connect Wallet</div>
                </div>

                <div className='flex p-[24px] flex-col items-center gap-[24px] self-stretch sm:rounded-[32px] border-y-[1px] sm:border-[1px] border-[#292C31] bg-[#484848]/[.08] mt-[24px]'>
                    <div className='flex justify-between w-full'>
                        <div className='flex w-[140px] justify-center items-center px-[24px] py-[12px] bg-[#E42B2B] rounded-full text-white'>Activity</div>
                        <div className='flex w-[140px] justify-center items-center px-[24px] py-[12px] border-[1px] border-[#292C31] rounded-full text-white'>Part. (23)</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category