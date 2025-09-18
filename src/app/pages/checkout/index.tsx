import Button from "@/core/components/Button/Button";
import Process from "@/core/components/Process";
import { useState } from "react";

export default function CheckOutPage() {
    const [selectedOption, setSelectedOption] = useState('');
    return (
        <section className="px-8 lg:px-14 py-20">
            <div className="">
                <h1 className="text-app-black font-poppins text-center text-[54px]/[58px] font-medium tracking-[-1px] mb-10">
                    Check Out
                </h1>
                <Process activeStep={2} completedStep={1} />
            </div>
            <div className="pt-20 grid md:grid-cols-3 gap-14">
                <div className="md:col-span-2 space-y-6">
                    <div className="rounded-md border border-app-black py-10 px-6 space-y-5">
                        <p className="text-app-black font-poppins text-xl/7 font-medium">
                            Contact Infomation
                        </p>
                        <div className="flex flex-col md:flex-row gap-6 items-center justify-between" >
                            <div className="space-y-3 w-full">
                                <label htmlFor="firstname" className="text-app-gray font-inter text-sm/3 font-bold uppercase">First Name</label>
                                <input placeholder="First name" type="text" name="firstname" id="firstname" className="border border-muted-gray outline-none ring-0 focus:ring-0 w-full rounded-md" />
                            </div>
                            <div className="space-y-3 w-full">
                                <label htmlFor="lastname" className="text-app-gray font-inter text-sm/3 font-bold uppercase">Last Name</label>
                                <input placeholder="Last name" type="text" name="lastname" id="firstname" className="border border-muted-gray outline-none ring-0 focus:ring-0 w-full rounded-md" />
                            </div>
                        </div>
                        <div className="space-y-3 w-full">
                            <label htmlFor="phone" className="text-app-gray font-inter text-sm/3 font-bold uppercase">Phone Number</label>
                            <input placeholder="Phone Number" type="tel" name="phone" id="firstname" className="border border-muted-gray outline-none ring-0 focus:ring-0 w-full rounded-md" />
                        </div>
                        <div className="space-y-3 w-full">
                            <label htmlFor="email" className="text-app-gray font-inter text-sm/3 font-bold uppercase">Email Address</label>
                            <input placeholder="Email Address" type="email" name="email" id="email" className="border border-muted-gray outline-none ring-0 focus:ring-0 w-full rounded-md" />
                        </div>
                    </div>
                    <div className="rounded-md border border-app-black py-10 px-6 space-y-5">
                        <p className="text-app-black font-poppins text-xl/7 font-medium">
                            Shipping Address
                        </p>
                        <div className="space-y-3 w-full">
                            <label htmlFor="streetAddress" className="text-app-gray font-inter text-sm/3 font-bold uppercase">Street Address *</label>
                            <input placeholder="Street Address" type="text" name="streetAddress" id="streetAddress" className="border border-muted-gray outline-none ring-0 focus:ring-0 w-full rounded-md" />
                        </div>
                        <div className="space-y-3 w-full">
                            <label htmlFor="country" className="text-app-gray font-inter text-sm/3 font-bold uppercase">Country *</label>
                            <select name="country" id="country" className="border border-muted-gray outline-none ring-0 focus:ring-0 w-full rounded-md">
                                <option value="" disabled selected>Select your country</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="GB">United Kingdom</option>
                                <option value="DE">Germany</option>
                                <option value="IN">India</option>
                                <option value="AU">Australia</option>
                                <option value="FR">France</option>
                                <option value="JP">Japan</option>
                                <option value="CN">China</option>
                                <option value="ZA">South Africa</option>
                            </select>
                        </div>
                        <div className="space-y-3 w-full">
                            <label htmlFor="townCity" className="text-app-gray font-inter text-sm/3 font-bold uppercase">Town / City *</label>
                            <input placeholder="Town / City" type="text" name="townCity" id="townCity" className="border border-muted-gray outline-none ring-0 focus:ring-0 w-full rounded-md" />
                        </div>
                        <div className="flex flex-col md:flex-row gap-6 items-center justify-between" >
                            <div className="space-y-3 w-full">
                                <label htmlFor="state" className="text-app-gray font-inter text-sm/3 font-bold uppercase">State</label>
                                <input placeholder="State" type="text" name="state" id="state" className="border border-muted-gray outline-none ring-0 focus:ring-0 w-full rounded-md" />
                            </div>
                            <div className="space-y-3 w-full">
                                <label htmlFor="zip" className="text-app-gray font-inter text-sm/3 font-bold uppercase">Zip Code</label>
                                <input placeholder="Zip Code" type="text" name="zip" id="zip" className="border border-muted-gray outline-none ring-0 focus:ring-0 w-full rounded-md" />
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-nowrap flex-wrap">
                            <input
                                id="accept"
                                type="checkbox"
                                className="w-5 h-5 text-gray-500 border-2 rounded focus:ring-0 checked:bg-app-black checked:border-[#6C7275] cursor-pointer"
                            />
                            <label htmlFor="accept" className="flex text-xs md:text-base font-inter leading-[26px] text-app-gray">
                                Use a different billing address (optional)
                            </label>
                        </div>
                    </div>
                    <div className="rounded-md border border-app-black py-10 px-6 space-y-5">
                        <p className="text-app-black font-poppins text-xl/7 font-medium">
                            Payment method
                        </p>
                        <div className="space-y-3 w-full">
                            <label htmlFor="streetAddress" className="text-app-gray font-inter text-sm/3 font-bold uppercase">Street Address *</label>
                            <input placeholder="Street Address" type="text" name="streetAddress" id="streetAddress" className="border border-muted-gray outline-none ring-0 focus:ring-0 w-full rounded-md" />
                        </div>
                        <div
                            className={`py-3 px-4 flex justify-between items-center rounded-[4px] border border-app-black ${selectedOption === 'card' ? 'bg-primary' : 'bg-white'
                                }`}
                            onClick={() => setSelectedOption('card')}
                        >
                            <div className="flex gap-3 items-center">
                                <input
                                    type="radio"
                                    name="shipping"
                                    id="card"
                                    checked={selectedOption === 'card'}

                                    className="appearance-none w-5 h-5 border border-app-black rounded-full checked:bg-app-black checked:border-app-black text-app-black"
                                />
                                <p className="text-app-black font-inter text-base/[26px]">
                                    Pay by Card Credit
                                </p>
                            </div>
                            <img src="/images/finance.svg" alt="finance" className="h-6 w-6 object-contain" />
                        </div>
                        <div
                            className={`py-3 px-4 flex justify-between items-center rounded-[4px] border border-app-black ${selectedOption === 'paypal' ? 'bg-primary' : 'bg-white'
                                }`}
                            onClick={() => setSelectedOption('paypal')}
                        >
                            <div className="flex gap-3 items-center">
                                <input
                                    type="radio"
                                    name="payment"
                                    id="paypal"
                                    checked={selectedOption === 'paypal'}

                                    className="appearance-none w-5 h-5 border border-app-black rounded-full checked:bg-app-black checked:border-app-black text-app-black"
                                />
                                <p className="text-app-black font-inter text-base/[26px]">
                                    Pay Pal
                                </p>
                            </div>
                            {/* <img src="/images/finance.svg" alt="finance" className="h-6 w-6 object-contain" /> */}
                        </div>
                        <div className="w-full pt-3">
                            <div className="h-[1px] bg-app-black"></div>
                        </div>
                        <div className="space-y-3 w-full">
                            <label htmlFor="cardnumber" className="text-app-gray font-inter text-sm/3 font-bold uppercase">Card Number</label>
                            <input placeholder="Card Number" type="text" name="cardnumber" id="cardnumber" className="border border-muted-gray outline-none ring-0 focus:ring-0 w-full rounded-md" />
                        </div>
                        <div className="flex flex-col md:flex-row gap-6 items-center justify-between" >
                            <div className="space-y-3 w-full">
                                <label htmlFor="expiredate" className="text-app-gray font-inter text-sm/3 font-bold uppercase">Expiration date</label>
                                <input placeholder="Expiration Date" type="text" name="expiredate" id="expiredate" className="border border-muted-gray outline-none ring-0 focus:ring-0 w-full rounded-md" />
                            </div>
                            <div className="space-y-3 w-full">
                                <label htmlFor="cvc" className="text-app-gray font-inter text-sm/3 font-bold uppercase">CVC</label>
                                <input placeholder="CVC" type="text" name="cvc" id="cvc" className="border border-muted-gray outline-none ring-0 focus:ring-0 w-full rounded-md" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-1">
                    <div className="rounded-md border border-app-gray px-4 py-6">
                        <h2 className="pb-4 text-app-black font-inter text-[28px]/[34px] border-app-gray font-semibold">
                            Order summary
                        </h2>
                        <div className="space-y-6">
                            {
                                Array.from({ length: 2 }, (_, idx) => (
                                    <div key={idx} className="w-full border-b border-app-light-gray">
                                        <div className="flex justify-between py-6 border-b border-app-light-gray">
                                            <div className="flex gap-4 items-center">
                                                <div className="bg-primary w-20 h-24">
                                                    <img
                                                        src={'/images/product-one.png'}
                                                        alt={'Product Img'}
                                                        className='object-contain object-center h-auto max-h-full w-full'
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <p className="text-app-black font-inter text-sm/[22px] font-semibold">
                                                        Tray Table
                                                    </p>
                                                    <p className="text-app-gray font-inter text-xs/[18px] font-normal">
                                                        Color: Black
                                                    </p>
                                                    <div className="flex gap-3 items-center border border-app-gray rounded py-3 px-2 w-fit">
                                                        <button>
                                                            <img src="/images/minus.svg" alt="" className="h-4 w-4" />
                                                        </button>
                                                        <p className="text-app-black font-inter font-semibold text-sm/[20px]">2</p>
                                                        <button>
                                                            <img src="/images/add.svg" alt="" className="h-4 w-4" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-right flex flex-col items-end gap-2">
                                                <p className="text-app-black font-inter text-lg/[30px] font-semibold">
                                                    $20.00
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                        <div className="flex gap-3 mt-6 mb-4 ">
                            <input placeholder="Coupon Code" type="text" name="coupon" id="coupon" className="border border-muted-gray outline-none ring-0 focus:ring-0 w-full rounded-md" />
                            <Button text="Apply" className="max-w-fit" />
                        </div>
                        <div className="flex gap-4 items-center py-3 justify-between border-b border-app-light-gray">
                            <div className="flex gap-3">
                                <img src="/images/ticket-percent.svg" alt="" className='h-4 md:h-6 w-4 md:w-6' />
                                <p className="text-app-black font-inter text-base/[26px] font-normal">
                                    JenkateMW
                                </p>
                            </div>
                            <p className="text-app-green font-inter text-base/[26px] font-semibold text-right">
                                -$25.00 [Remove]
                           </p>
                        </div>
                        <div className="flex gap-4 items-center py-3 justify-between border-b border-app-light-gray">
                            <p className="text-app-black font-inter text-base/[26px] font-normal">
                                Shipping
                            </p>
                            <p className="text-app-black font-inter text-base/[26px] font-semibold text-right">
                                Free
                            </p>
                        </div>
                        <div className="flex gap-4 items-center py-3 justify-between border-b border-app-light-gray">
                            <p className="text-app-black font-inter text-base/[26px] font-normal">
                                Subtotal
                            </p>
                            <p className="text-app-black font-inter text-base/[26px] font-semibold text-right">
                                $99.00
                            </p>
                        </div>
                        <div className="flex gap-4 items-center py-3 justify-between">
                            <p className="text-app-black font-inter text-xl/[26px] font-medium">
                                Total
                            </p>
                            <p className="text-app-black font-inter text-xl/[26px] font-medium text-right">
                                $99.00
                            </p>
                        </div>
                 </div>
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-14 mt-6">
                <div className="md:col-span-2">
                    <Button text="Place Order" type="submit" />
                </div>
            </div>
        </section>
    )
}
