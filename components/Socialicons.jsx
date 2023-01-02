import { AiFillInstagram } from 'react-icons/ai';
import { IoLogoTwitter } from 'react-icons/io';
import { GrLinkedinOption } from 'react-icons/gr';
import { RiGithubLine } from 'react-icons/ri';

import Link from "next/link"

const Socialicons = () => {
  return (
    <div className='Icons'>
        <div className='Icon icon--instagram'>
            <Link href={''}><AiFillInstagram/></Link>
        </div>
        <div className='Icon icon--twitter'>
            <Link href={''}><IoLogoTwitter/></Link>
        </div>
        <div className='Icon icon--linkedin'>
            <Link href={''}><GrLinkedinOption/></Link>
        </div>
        <div className='Icon icon--github'>
            <Link href={''}><RiGithubLine/></Link>
        </div>
    </div>
  )
}

export default Socialicons