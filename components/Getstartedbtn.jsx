import Link from "next/link"

const Getstartedbtn = () => {
    return (
        <>
            <div className='BtnHover hover:text-blue-500 w-36 h-11 flex justify-center items-center border-2 border-white rounded-lg mt-5 text-white cursor-pointer tracking-wide'>
                <Link href={'/'}>Get Started</Link>
            </div>
        </>
    )
}

export default Getstartedbtn