import HostingCards from './HostingCards';

const Pricing = () => {
    return (
        <div className='mt-14'>
            <div className='mb-5 BgPattern py-3 text-white text-center font-bold text-xl'>Best Web Hosting</div>
            <div className='md:w-[600px] lg:w-[950px] mx-auto px-5 md:px-0'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    <HostingCards/>
                </div>
            </div>
        </div>
    )
}

export default Pricing