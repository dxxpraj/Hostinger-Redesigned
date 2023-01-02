import Image from 'next/image'
import { BiRupee } from 'react-icons/bi';
import Getstartedbtn from './Getstartedbtn';

const Header = () => {
    return (
        <header className='w-full transition duration-400 ease-in'>
            <div className='BgPattern relative w-full h-[70vh] px-8 md:px-12 lg:px-48'>
                <div className='mt-14 mx-auto w-full h-full flex justify-center items-center gap-20'>
                    <div className='md:w-80 lg:w-96 flex flex-col justify-center h-full Wordwidth sm:w-full'>
                        <h1 className='text-2xl font-semibold mb-4 text-white flex flex-col'>
                            <span>Savings to Set Your Website </span>
                            <span>in
                                <span className='Rotate-Words'>
                                    <span>Motion.</span>
                                </span>
                                <span className='flex mt-3'>
                                    <span className='text-base md:text-lg mt-1'><BiRupee/></span>
                                    <span className='text-4xl font-semibold'>149.00<span className='text-lg'>/mo</span></span>
                                </span>
                            </span>
                        </h1>
                        <h5 className='text-sm text-gray-200'>Get things moving with a free domain, lifetime SSL, and DDoS protection included with a four-year subscription.</h5>
                        <Getstartedbtn/>
                    </div>
                    <div className='hidden md:block'>
                        <Image
                            src="/header2.svg"
                            alt="Picture of the author"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header