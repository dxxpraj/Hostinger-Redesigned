import Logo from "./Logo"
import Socialicons from "./Socialicons"

const Footer = () => {
    return (
        <footer className='flex flex-col justify-center items-center mt-20 bg-gray-200 py-5 md:px-48 lg:px-96 px-4'>
            <div className='mx-auto mb-4'><Logo /></div>
            <p className='text-center md:text-sm'>We are a web hosting company with a mission to help everyone who goes online succeed.
                We accomplish this by continuously developing server technology, giving expert assistance, and ensuring a flawless online website hosting experience.</p>
            <div className='mb-5 mt-6'>
                <Socialicons />
            </div>
            <div className='text-center text-xs text-gray-500 mt-4'>© 2004-2022 hostinger.in - India’s #1 Web Hosting and Domains provider.</div>
        </footer>
    )
}

export default Footer