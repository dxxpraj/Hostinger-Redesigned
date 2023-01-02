import { BiSearchAlt2 } from 'react-icons/bi';

const Domainsearch = () => {
    return (
        <div className='mx-8 md:mx-12 lg:mx-48 mt-10 flex flex-col justify-center text-center'>
            <div className='text-2xl mt-4 mb-2 text-gray-500 font-semibold'>Find the perfect domain name</div>
            <p className='text-sm mb-3 text-gray-400'>Enter domain name of your choice and pick any extension name on the next step.</p>
            <div className='CustomShadowTwo rounded-md md:w-72 w-full mx-auto'>
                <div className='flex flex-col relative rounded-md mx-auto overflow-hidden'>
                    <input type="text" placeholder='Search domain' className='p-4 outline-none pl-8 pr-16 text-sm overflow-hidden' />
                    <div className='h-14 w-12 absolute top-4 right-0 text-xl cursor-pointer'><BiSearchAlt2 /></div>
                </div>
            </div>
        </div>
    )
}

export default Domainsearch