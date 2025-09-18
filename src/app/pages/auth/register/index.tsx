import { CustomInput } from '@/core/components';
import { FC } from 'react';

const Register: FC = () => {
  return (
    <div className='grid md:grid-cols-2 h-screen text-app-black'>
      <div className='login-background min-h-[437px]'>
        <h1 className='text-center font-poppins font-medium text-2xl mt-8'>3legant.</h1>
      </div>

      <div className='flex items-center justify-center px-10'>
        <form className='bg-white w-full max-w-[486px] space-y-8 py-10'>
          <h2 className='text-[40px]/[44px] font-poppins font-medium tracking-[-0.4px]'>Sign In</h2>
          <p className='text-app-gray font-inter text-base/[26px] font-semibold'>
            Don’t have an accout yet?  <a href='/login' className='text-app-green cursor-pointer'>Sign Up</a>
          </p>
          <CustomInput
            id="name"
            type="text"
            placeholder="Your usernam or email address"
            required
          />
          <CustomInput
            id="password"
            type="password"
            placeholder="Password"
            icon='/images/eye.svg'
            required
          />
          <div className='flex justify-between items-center'>
            <div className="flex items-center gap-2 text-nowrap flex-wrap">
              <input
                id="accept"
                type="checkbox"
                className="w-5 h-5 text-gray-500 border-2 rounded focus:ring-0 checked:bg-app-black checked:border-[#6C7275] cursor-pointer"
                defaultChecked
              />
              <p className="flex text-xs md:text-base font-inter leading-[26px] text-app-gray">
                Remember me
              </p>
            </div>
            <p className='text-app-black font-inter text-xs md:text-base leading-[26px] font-semibold'>
              Forgot password?
            </p>
         </div>
          <button className='text-white text-center font-inter text-base font-medium leading-[28px] tracking-[-0.4px] bg-app-black rounded-lg w-full px-10 py-[10px]'>
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register;
