
export default function Footer() {
    return (
        <footer className='px-8 md:px-7 lg:px-14 py-12 md:pt-20 md:pb-8 bg-app-black'>
            <div className="flex flex-col md:flex-row justify-between items-center mb-[49px] 2xl:container mx-auto gap-10">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <h1 className='text-white text-center font-poppins font-medium text-2xl'>3legant.</h1>
                    <div className="h-[1px] w-6 md:min-h-6 md:w-[1px] bg-app-gray" />
                    <p className="max-w-[350px] flex-shrink-0 text-white font-inter text-sm/[22px]">
                        Gift & Decoration Store
                    </p>
                </div>
                <div>
                    <nav className='text-center'>
                        <ul className='flex flex-col md:flex-row justify-center items-center gap-8'>
                            <li>
                                <a href="#" className='text-white font-inter text-sm font-semibold'>Home</a>
                            </li>
                            <li>
                                <a href="#" className='text-white font-inter text-sm font-semibold'>Shop</a>
                            </li>
                            <li>
                                <a href="#" className='text-white font-inter text-sm font-semibold'>Product</a>
                            </li>
                            <li>
                                <a href="#" className='text-white font-inter text-sm font-semibold'>Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="py-4 flex flex-col-reverse md:flex-row justify-between items-center 2xl:container mx-auto border-t-[0.5px] border-app-gray gap-8">
                <div className="flex flex-col md:flex-row gap-7 items-center">
                    <p className="max-w-[350px] flex-shrink-0 text-app-light-gray font-poppins text-sm/[20px]">
                        Copyright © 2023 3legant. All rights reserved
                    </p>
                    <p className="max-w-[350px] flex-shrink-0 text-white font-poppins text-sm/[20px] font-semibold">
                        Privacy Policy
                    </p>
                    <p className="max-w-[350px] flex-shrink-0 text-white font-poppins text-sm/[20px] font-semibold">
                        Terms of Use
                    </p>
                </div>
                <div className="flex gap-6 items-center">
                    <img src="/images/instagram.svg" alt="" className="h-6 w-6 object-contain" />
                    <img src="/images/facebook.svg" alt="" className="h-6 w-6 object-contain" />
                    <img src="/images/youtube.svg" alt="" className="h-6 w-6 object-contain" />
                </div>
            </div>
        </footer>
    )
}
