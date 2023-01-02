import Link from 'next/link'
import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { NavLinks } from "./Mylinks";
import Logo from './Logo';

const Navbar = () => {
    const [catagories, setCatagories] = useState("");
    const [open, setOpen] = useState(false);
    return (
        <div className="w-full fixed top-0 left-0 z-10">
            <div className="md:flex items-center justify-between bg-white py-3 md:px-5 lg:px-36 xl:px-52 px-4">
                <Logo/>
                <div onClick={() => setOpen(!open)} className='text-2xl absolute right-4 top-4 cursor-pointer md:hidden'>
                    {open ? <MdClose className='text-blue-500' /> : <BiMenu className='text-blue-500' />}
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-4 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:px-0 px-9 transition-all duration-300 ease-in ${open ? 'top-[56px] border-t border-blue-500 shadow-md' : 'top-[-490px]'}`}>
                    {
                        NavLinks.map((NavLink) => (
                            <div key={NavLink.name}>
                                <li 
                                    onClick={() => catagories !== NavLink.name ? setCatagories(NavLink.name) : setCatagories("")} className='md:ml-8 font-normal text-blue-500 md:my-0 my-5 cursor-pointer flex justify-between hover:text-blue-400 md:text-sm'>
                                    {NavLink.name}
                                    <span className='font-bold text-2xl'>{catagories === NavLink.name ? <BiChevronUp /> : <BiChevronDown />}</span>
                                </li>
                                {NavLink.submenu && (
                                    <div className={`${catagories === NavLink.name ? 'block' : 'hidden'}`}>
                                        <div className='absolute md:top-11 -mt-8 md:mt-0'>
                                            <div className='py-3'>
                                                <div className='w-4 h-4 md:left-7 left-1 absolute mt-1 bg-[#a2d9ff] md:bg-white rotate-45'></div>
                                            </div>
                                            <div onClick={() => setOpen(false)} className='bg-[#a2d9ff] md:bg-white p-4 shadow-md mr-2'>
                                                {
                                                    NavLink.sublinks.map((mysublinks) => (
                                                        <div key={mysublinks.head} onClick={() => catagories !== NavLink.name ? setCatagories(NavLink.name) : setCatagories("")} className='py-2 text-sm cursor-pointer hover:scale-105 transition duration-300 ease-in'>
                                                            <Link href={mysublinks.sublink}>
                                                                <div>
                                                                    <h1 className='font-medium md:font-normal text-blue-500'>{mysublinks.head}</h1>
                                                                    <p className='text-gray-500'>{mysublinks.shortdesc}</p>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))
                    }
                    <li onClick={() => setOpen(false)} className='md:ml-8 font-normal text-blue-500 cursor-pointer hover:text-blue-400'>
                        <Link href={'/'}>
                            <span className='flex'>
                                <span className='mt-[1px] mr-1 text-xl'><HiOutlineShoppingCart /></span>
                                <span className='tracking-wide block md:hidden lg:block'>Cart</span>
                            </span>
                        </Link>
                    </li>
                    <li onClick={() => setOpen(false)} className='md:ml-8 mt-7 md:mt-0 mb-5 md:mb-0 cursor-pointer'>
                        <Link href={'/'}>
                            <div>
                                <span className='BtnHoverTwo bg-blue-500 px-10 md:px-6 py-3 md:py-2 rounded-lg text-sm text-white font-medium tracking-wide'>Login</span>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar