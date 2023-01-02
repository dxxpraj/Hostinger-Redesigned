import { BiRupee } from 'react-icons/bi';
import { ImCross } from 'react-icons/im';
import { TiTick } from 'react-icons/ti';
import Link from 'next/link';

const HostingCards = () => {
    return (<>
        <div className='CustomShadowTwo pb-4 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition duration-200 ease-in'>
            <div className='font-semibold text-lg py-3 mb-5 text-center bg-gray-200'>Basic</div>
            <div className='my-3'>
                <div className='flex justify-center'>
                    <span className='text-base'><BiRupee /></span>
                    <span className='text-4xl font-semibold'>149<span className='text-sm'>/m</span></span>
                </div>
                <p className='text-center text-sm text-gray-400 px-4'>₹249.00/mo when you renew</p>
            </div>
            <div className='px-4'>
                <ul className='truncate'>
                    <li className='flex text-base md:text-sm my-2'><span className='mt-1 font-semibold mr-1 text-xl text-green-500'><TiTick/></span>Unmetered traffic</li>
                    <li className='flex text-base md:text-sm my-2'><span className='mt-1 font-semibold mr-1 text-xl text-green-500'><TiTick /></span>50 Websites</li>
                    <li className='flex text-base md:text-sm my-2'><span className='mt-1 font-semibold mr-1 text-xl text-green-500'><TiTick /></span>50 GB SSD Storage</li>
                    <li className='flex text-base md:text-sm my-2'><span className='mt-1 font-semibold mr-1 text-xl text-green-500'><TiTick /></span>Free Weekly Backups</li>
                    <li className='flex text-base md:text-sm my-2'><span className='mt-1 font-semibold mr-2 pl-1 text-xs text-red-500'><ImCross /></span>Unlimited Free SSL</li>
                    <li className='flex text-base md:text-sm my-2'><span className='mt-1 font-semibold mr-2 pl-1 text-xs text-red-500'><ImCross /></span>Free Domain</li>
                    <li className='flex text-base md:text-sm my-2'><span className='mt-1 font-semibold mr-1 text-xl text-green-500'><TiTick /></span>Free Email</li>
                    <li className='flex text-base md:text-sm my-2'><span className='mt-1 font-semibold mr-2 pl-1 text-xs text-red-500'><ImCross /></span>Optimized for WordPress</li>
                </ul>
            </div>
            <div className='text-center my-4 cursor-pointer'>
                <Link href={'/'}>
                    <div>
                        <span className='BtnHoverTwo bg-blue-500 px-10 md:px-6 py-3 md:py-2 rounded-lg text-sm text-white font-medium tracking-wide'>Select</span>
                    </div>
                </Link>
            </div>
        </div>
        <div className='CustomShadowTwo pb-4 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition duration-200 ease-in'>
            <div className='font-semibold text-lg py-3 mb-5 text-center bg-gray-200'>Pro</div>
            <div className='my-3'>
                <div className='flex justify-center'>
                    <span className='text-base'><BiRupee /></span>
                    <span className='text-4xl font-semibold'>249<span className='text-sm'>/m</span></span>
                </div>
                <p className='text-center text-sm text-gray-400 px-4'>₹349.00/mo when you renew</p>
            </div>
            <div className='px-4'>
                <ul className='truncate'>
                    <li className='flex text-base md:text-sm my-2'><span className='mt-1 font-semibold mr-1 text-xl text-green-500'><TiTick /></span>Unmetered traffic</li>
                    <li className='flex text-base md:text-sm my-2'><span className='mt-1 font-semibold mr-1 text-xl text-green-500'><TiTick /></span>100 Websites</li>
                    <li className='flex text-base md:text-sm my-2'><span className='mt-1 font-semibold mr-1 text-xl text-green-500'><TiTick /></span>100 GB SSD Storage</li>
                    <li className='flex text-base md:text-sm my-2'><span className='mt-1 font-semibold mr-1 text-xl text-green-500'><TiTick /></span>Free Weekly Backups</li>
                    <li className='flex text-base md:text-sm my-2'><span className='mt-1 font-semibold mr-2 pl-1 text-xs text-red-500'><ImCross /></span>Unlimited Free SSL</li>
                    <li className='flex text-base md:text-sm my-2'><span className='mt-1 font-semibold mr-1 text-xl text-green-500'><TiTick /></span>Free Domain</li>
                    <li className='flex text-base md:text-sm my-2'><span className='mt-1 font-semibold mr-2 pl-1 text-xs text-red-500'><ImCross /></span>Free Email</li>
                    <li className='flex text-base md:text-sm my-2'><span className='mt-1 font-semibold mr-1 text-xl text-green-500'><TiTick /></span>Optimized for WordPress</li>
                </ul>
            </div>
            <div className='text-center my-4 cursor-pointer'>
                <Link href={'/'}>
                    <div>
                        <span className='BtnHoverTwo bg-blue-500 px-10 md:px-6 py-3 md:py-2 rounded-lg text-sm text-white font-medium tracking-wide'>Select</span>
                    </div>
                </Link>
            </div>
        </div>
        <div className='CustomShadowTwo pb-4 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition duration-200 ease-in'>
            <div className='font-semibold text-lg py-3 mb-5 text-center bg-gray-200'>Premium</div>
            <div className='my-3'>
                <div className='flex justify-center'>
                    <span className='text-base'><BiRupee /></span>
                    <span className='text-4xl font-semibold'>349<span className='text-sm'>/m</span></span>
                </div>
                <p className='text-center text-sm text-gray-400 px-4'>₹449.00/mo when you renew</p>
            </div>
            <div className='px-4'>
                <ul className='truncate'>
                    <li className='flex text-base md:text-sm my-2'><span className='mt-1 font-semibold mr-1 text-xl text-green-500'><TiTick /></span>Unmetered traffic</li>
                    <li className='flex text-base md:text-sm my-2'><span className='mt-1 font-semibold mr-1 text-xl text-green-500'><TiTick /></span>150 Websites</li>
                    <li className='flex text-base md:text-sm my-2'><span className='mt-1 font-semibold mr-1 text-xl text-green-500'><TiTick /></span>150 GB SSD Storage</li>
                    <li className='flex text-base md:text-sm my-2'><span className='mt-1 font-semibold mr-1 text-xl text-green-500'><TiTick /></span>Free Weekly Backups</li>
                    <li className='flex text-base md:text-sm my-2'><span className='mt-1 font-semibold mr-1 text-xl text-green-500'><TiTick /></span>Unlimited Free SSL</li>
                    <li className='flex text-base md:text-sm my-2'><span className='mt-1 font-semibold mr-1 text-xl text-green-500'><TiTick /></span>Free Domain</li>
                    <li className='flex text-base md:text-sm my-2'><span className='mt-1 font-semibold mr-1 text-xl text-green-500'><TiTick /></span>Free Email</li>
                    <li className='flex text-base md:text-sm my-2'><span className='mt-1 font-semibold mr-1 text-xl text-green-500'><TiTick /></span>Optimized for WordPress</li>
                </ul>
            </div>
            <div className='text-center my-4 cursor-pointer'>
                <Link href={'/'}>
                    <div>
                        <span className='BtnHoverTwo bg-blue-500 px-10 md:px-6 py-3 md:py-2 rounded-lg text-sm text-white font-medium tracking-wide'>Select</span>
                    </div>
                </Link>
            </div>
        </div>
    </>
    )
}

export default HostingCards