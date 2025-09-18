import Button from "../../Button/Button";

interface MobileMenuProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function MobileMenu({ setOpen }: MobileMenuProps) {

    return (
        <div className='p-6 bg-white absolute top-0 left-0 z-50 w-full h-screen flex flex-col justify-between md:hidden'>
            <div>
                <div className="flex justify-between items-center self-stretch">
                    <img src="/images/logo.svg" alt="Logo" className='h-6 w-auto' />
                    <button onClick={() => setOpen(false)}>
                        <img src="/images/close.svg" alt="Logo" className='h-6 w-auto' />
                    </button>
                </div>
                <input
                    type="text"
                    className="border border-app-gray bg-white rounded-lg p-2 text-base w-full mt-4"
                    placeholder="Enter text"
                />
                <nav>
                    <ul className="">
                        <li className="pt-4 w-full text-app-black font-inter text-sm font-semibold pb-2 border-b border-app-light-gray">
                            <a href="#" className='w-full'>Home</a>
                        </li>
                        <li className="pt-4 w-full text-app-black font-inter text-sm font-semibold pb-2 border-b border-app-light-gray">
                            <a href="#" className='w-full'>Shop</a>
                        </li>
                        <li className="pt-4 w-full text-app-black font-inter text-sm font-semibold pb-2 border-b border-app-light-gray">
                            <a href="#" className='w-full'>Products</a>
                        </li>
                        <li className="pt-4 w-full text-app-black font-inter text-sm font-semibold pb-2 border-b border-app-light-gray">
                            <a href="#" className='w-full'>Contact Us</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <div className="flex justify-between pb-3 border-b border-app-light-gray">
                    <a className="text-lg/[32px] font-inter font-medium tracking-[-0.4px] text-app-gray" href="#">Cart</a>
                    <div className='flex items-center gap-1.5'>
                        <img src="/images/shopping bag.svg" alt="Search Icon" className='h-6 w-6' />
                        <div className='bg-app-black h-5 w-5 rounded-full flex justify-center items-center'>
                            <p className='text-white text-center font-inter text-xs font-bold leading-[10px]'>
                                2
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between pb-3 border-b border-app-light-gray mb-2">
                    <a className="text-lg/[32px] font-inter font-medium tracking-[-0.4px] text-app-gray" href="#">Wishlist</a>
                    <div className='flex items-center gap-1.5'>
                        <img src="/images/wishlist.svg" alt="Search Icon" className='h-6 w-6' />
                        <div className='bg-app-black h-5 w-5 rounded-full flex justify-center items-center'>
                            <p className='text-white text-center font-inter text-xs font-bold leading-[10px]'>
                                2
                            </p>
                        </div>
                    </div>
                </div>
                <div className="py-[18px]">
                    <Button text="Sign In" onClick={() => console.log('heelo')} />
                </div>
                <div className="flex gap-6">
                    <a href="">
                        <img src="/images/instagram-black.svg" alt="integram" className="w-6 h-6" />
                    </a>
                    <a href="">
                        <img src="/images/faceboo-black.svg" alt="facebook" className="w-6 h-6" />
                    </a>
                    <a href="">
                        <img src="/images/youtube-black.svg" alt="youtube" className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </div>
    )
}
