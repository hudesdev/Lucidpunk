import React from 'react'

import Header from '../../components/Header'
import Goto from '../../components/Goto'

import Connect from '../../components/Header/Connect'
import {FaPlus, FaWifi, FaBatteryFull, FaSignal } from "react-icons/fa"
import AfterLoginBody from '../../components/Body/AfterLoginBody';

const Afterlogin = () => {
    return(
        <div className='flex flex-col justify-center items-center '> 
            <div className='flex sm:invisible justify-between items-center w-full text-white py-[10px]'>
                <p className='text-[14px] font-semibold leading-[20px] pl-[29px]'>9:41</p>
                <div className='flex pr-[13px] gap-1'>
                    <FaSignal/>
                    <FaWifi/>
                    <FaBatteryFull/>
                </div>
            </div>
            <Header>
                <Connect/>  
                <div className='flex min-[1100px]:hidden text-white w-1/2 flex h-[32px] justify-end'>
                    <div className='flex py-1 pr-2 pl-1 justify-center content-center rounded-l-3xl bg-[#131619]'>
                        <img src="assets/img/Shape.png" alt="" className='w-[19px] h-[19px] mt-[2px]' />
                        <p className="font-['Lato'] center text-[10px] font-semibold leading-[23px] ml-1.5 ">0.023 SOL</p>
                    </div>
                    <div className='flex py-1.5 pr-2 pl-1.5 justify-center content-center bg-[#292C31] rounded-r-3xl border-y border-b border-[#131619]'>
                        <div className='w-4 h-4'><FaPlus/></div>
                    </div>
                    <img src="assets/img/avater.png"alt="" className='pl-[8px]' />
                </div>
            </Header>
            <AfterLoginBody/>
        </div>
    )
}

export default Afterlogin