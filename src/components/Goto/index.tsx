
import react, { ReactNode } from 'react'
import LinkBtn from '../Widgets/LinkBtn'
import { FaArrowLeft, FaTwitter, FaTelegram, FaEllipsisV, FaShareAlt  } from 'react-icons/fa'

const Goto = () => {
    return (
        <div className='w-full flex justify-between'>
            <LinkBtn>
                <FaArrowLeft/>Back
            </LinkBtn>
        
            <div className='w-[184px] sm:w-[226px] flex justify-between'>
                <LinkBtn>
                    <FaTwitter/>
                </LinkBtn>
                <LinkBtn>
                    <FaTelegram/>
                </LinkBtn>
                <LinkBtn>
                    <FaEllipsisV/>
                </LinkBtn>
                <LinkBtn>
                    <FaShareAlt/>
                </LinkBtn>
            </div>
        </div>
    )
}

export default Goto