import react, { ReactNode } from 'react'
import Goto from '../../Goto';
import Hero from '../../Hero';
import Category from './Category'

const AfterLoginBody = () => {
    return(
        <div className='w-full p-[20px] sm:w-[1140px]'>
            <Goto/>
            <Hero/>
            <Category/>
        </div>
    )
}

export default AfterLoginBody;