import { CustomInput } from '@/core/components';
import { FC } from 'react';

const Login: FC = () => {
  return (
    <div className='grid md:grid-cols-2 h-screen text-app-black'>
      <div className='login-background min-h-[437px]'>
        <h1 className='text-center font-poppins font-medium text-2xl mt-8'>3legant.</h1>
      </div>

      <div className='flex items-center justify-center px-10'>
        <form className='bg-white w-full max-w-[486px] space-y-8 py-10'>
          <h2 className='text-[40px]/[44px] font-poppins font-medium tracking-[-0.4px]'>Sign up</h2>
          <p className='text-app-gray font-inter text-base/[26px] font-semibold'>
            Already have an account? <a href='/register' className='text-app-green cursor-pointer'>Sign in</a>
          </p>
          <CustomInput
            id="name"
            type="text"
            placeholder="Your name"
            required
          />
          <CustomInput
            id="username"
            type="text"
            placeholder="Username"
            required
          />
          <CustomInput
            id="email"
            type="email"
            placeholder="Email address"
            required
          />
          <CustomInput
            id="password"
            type="password"
            placeholder="Password"
            icon='/images/eye.svg'
            required
          />
          <div className="flex items-center gap-2 text-nowrap flex-wrap">
            <input
              id="accept"
              type="checkbox"
              className="w-5 h-5 text-gray-500 border-2 rounded focus:ring-0 checked:bg-app-black checked:border-[#6C7275] cursor-pointer"
              defaultChecked
            />
            <label htmlFor="accept" className="flex text-xs md:text-base font-inter leading-[26px] text-app-gray">
              I agree with&nbsp;
              <a href="#" className="text-app-black font-inter hover:underline font-bold">
                Privacy Policy &nbsp;
              </a>
              and &nbsp;
              <a href="#" className="text-app-black font-inter hover:underline font-bold">
                Terms of Use
              </a>
            </label>
          </div>
          <button className='text-white text-center font-inter text-base font-medium leading-[28px] tracking-[-0.4px] bg-app-black rounded-lg w-full px-10 py-[10px]'>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login;
