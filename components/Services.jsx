import { TiTick } from 'react-icons/ti';

const Services = () => {
  return (
    <div className='mt-20 px-4 md:w-[800px] mx-auto'>
        <div className='text-2xl font-semibold text-center mb-10'>Our services include :</div>
        <div className='grid md:grid-cols-3 grid-cols-1 text-base gap-y-4'>
            <div className='flex'><span className='mt-1 text-green-500 mr-2'><TiTick/></span><span>Free SSL</span></div>
            <div className='flex'><span className='mt-1 text-green-500 mr-2'><TiTick/></span><span>Free Migration</span></div>
            <div className='flex'><span className='mt-1 text-green-500 mr-2'><TiTick/></span><span>PHP Speed Boost</span></div>
            <div className='flex'><span className='mt-1 text-green-500 mr-2'><TiTick/></span><span>24/7/365 Tech Support</span></div>
            <div className='flex'><span className='mt-1 text-green-500 mr-2'><TiTick/></span><span>Access Management</span></div>
            <div className='flex'><span className='mt-1 text-green-500 mr-2'><TiTick/></span><span>Automated backups</span></div>
            <div className='flex'><span className='mt-1 text-green-500 mr-2'><TiTick/></span><span>LiteSpeed Cache Plugin</span></div>
            <div className='flex'><span className='mt-1 text-green-500 mr-2'><TiTick/></span><span>Auto Script Installer</span></div>
            <div className='flex'><span className='mt-1 text-green-500 mr-2'><TiTick/></span><span>eCommerce Optimization</span></div>
            <div className='flex'><span className='mt-1 text-green-500 mr-2'><TiTick/></span><span>DDoS Protection</span></div>
            <div className='flex'><span className='mt-1 text-green-500 mr-2'><TiTick/></span><span>One-Click WordPress Installation</span></div>
            <div className='flex'><span className='mt-1 text-green-500 mr-2'><TiTick/></span><span>99.9% Uptime Guarantee</span></div>
        </div>
    </div>
  )
}

export default Services