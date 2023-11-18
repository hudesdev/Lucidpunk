import react, { ReactNode } from 'react'
import {NavLink} from 'react-router-dom'

const Header = ({children}:headerType) => {
    return(
        <div className='w-full flex justify-center sm:pt-8'>
            <div className='w-full sm:w-[1336px] bg-[#292C31] h-[66] sm:h-[86px] sm:border-2 sm:border-solid sm:border-zinc-50/[.32] sm:rounded-full flex justify-between content-center px-5 py-3.5 sm:p-5'>
                <div className='flex text-white max-[1100px]:hidden max-[1473px]:w-1/3 w-1/4 justify-between content-center pt-2'>
                    <NavLink to="/">DeFi</NavLink>
                    <NavLink to="/">Colourize</NavLink>
                    <NavLink to="/">Arm Protocol</NavLink>
                    <NavLink to="/">Winners</NavLink>
                </div>
                <div className = "w-1/2 sm:w-48 flex">
                    <img src="assets/img/logo.png" alt=""className='w-2/12 h-[32px] sm:h-[42px]'/>
                    <img src="assets/img/Group.png" className='w-5/6 h-[32px] sm:h-[42px]'/>
                </div>
                
                {children}
            </div>
        </div>
    )
}

type headerType = {children: ReactNode}

export default Header