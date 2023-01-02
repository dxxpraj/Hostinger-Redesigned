import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from 'next/image'

const Testimonial = ({ innerRef }) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='mt-20 text-center px-4 bg-gray-200 py-10'>
            <div className='text-2xl font-semibold mb-10'>What Our Clients Are Saying?</div>
            <Slider {...settings} className='md:w-[50%] w-[80%] mx-auto'>
                <div>
                    <div className='text-center'>
                        <Image
                            src="/avatar1.jpg"
                            alt="Picture of the author"
                            width={60}
                            height={60}
                            className='rounded-[50%]'
                        />
                        <p className='text-sm my-3'>The primary thing that we want in a hosting company is reliability, especially when an e-commerce site such as our SMS marketing site is your lifeblood. hostinger.in has provided that reliability to us for a decade and we have no reason to switch.</p>
                        <div className='mb-8 font-semibold italic'>Bob Bentz</div>
                    </div>
                </div>
                <div>
                    <div className='text-center'>
                        <Image
                            src="/avatar2.jpg"
                            alt="Picture of the author"
                            width={60}
                            height={60}
                            className='rounded-[50%]'
                        />
                        <p className='text-sm my-3'>I have been a client of hostinger.in for about 15 years. I do not need support often, but when I do they go above and beyond in providing tech support and offering solutions to resolve the issue. Sergei and Anton have been extremely helpful. I highly hostinger.in.</p>
                        <div className='mb-8 font-semibold italic'>Danny Garrido</div>
                    </div>
                </div>
                <div>
                    <div className='text-center'>
                        <Image
                            src="/avatar3.jpg"
                            alt="Picture of the author"
                            width={60}
                            height={60}
                            className='rounded-[50%] border'
                        />
                        <p className='text-sm my-3'>I have done live chat multiple times in the past few days, and have been so pleased with the service. Website management is a bit more than I imagined, but what I love about hostinger.in is that someone is always at the ready to help me.</p>
                        <div className='mb-8 font-semibold italic'>Tracy Pielemeier</div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default Testimonial