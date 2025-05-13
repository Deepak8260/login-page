import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <main className="flex max-w-6xl w-full bg-white rounded-tr-3xl rounded-br-3xl overflow-hidden">
      {/* Left side */}
      <section className="bg-[#a9c0f0] flex flex-col justify-between p-10 sm:p-16 md:p-20 w-72 sm:w-96 md:w-[400px] rounded-tl-3xl rounded-bl-3xl">
        <div>
          <h1 className="text-white text-2xl sm:text-3xl leading-snug max-w-xs">
            Need webdesign <br />
            for your business? <br />
            <span className="font-mono-bold text-[#5579d1] text-2xl sm:text-3xl">
              Design Spacee
            </span>
            <br />
            will help you.
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-[#5579d1] rounded-tr-3xl flex items-center justify-center shadow-[10px_10px_20px_rgba(0,0,0,0.15)]">
            <span className="text-[#a9c0f0] font-mono-bold text-[7rem] sm:text-[9rem] md:text-[11rem] select-none">
              S
            </span>
          </div>
        </div>
        <p className="text-white text-[9px] sm:text-xs text-center font-light tracking-widest select-none">
          figma.com/@designspacee
        </p>
      </section>

      {/* Right side */}
      <section className="flex-1 p-10 sm:p-16 md:p-20 flex flex-col items-center justify-center">
        <h2
          className="font-mono-bold text-black text-lg mb-8 select-none"
          style={{ letterSpacing: '0.05em' }}
        >
          Create Account
        </h2>

        <div className="flex gap-6 mb-10 w-full max-w-md">
          <button className="flex-1 border border-[#5579d1] rounded-md py-2 text-[9px] text-center text-[#5579d1] font-light tracking-widest">
            Sign up with Google
          </button>
          <button className="flex-1 border border-[#5579d1] rounded-md py-2 text-[9px] text-center text-[#5579d1] font-light tracking-widest">
            Sign up with Facebook
          </button>
        </div>

        <div className="flex items-center gap-3 mb-8 w-full max-w-md">
          <hr className="flex-1 border-t-2 border-gray-400" />
          <span className="font-mono-bold text-gray-600 text-sm select-none">
            — OR —
          </span>
          <hr className="flex-1 border-t-2 border-gray-400" />
        </div>

        <form className="w-full max-w-md flex flex-col gap-6">
          <input
            type="text"
            placeholder="Full Name"
            className="border-b border-gray-300 focus:outline-none focus:border-[#5579d1] text-xs placeholder-gray-400 pb-1"
          />
          <input
            type="email"
            placeholder="Email"
            className="border-b border-gray-300 focus:outline-none focus:border-[#5579d1] text-xs placeholder-gray-400 pb-1"
          />
          <input
            type="password"
            placeholder="Password"
            className="border-b border-gray-300 focus:outline-none focus:border-[#5579d1] text-xs placeholder-gray-400 pb-1"
          />
          <button
            type="submit"
            className="bg-[#5579d1] text-white font-mono-bold text-xs py-3 rounded-md tracking-widest"
          >
            Create Account
          </button>
        </form>

        <p className="text-[9px] text-center mt-6 max-w-md">
          Already have an account?{' '}
          <Link to="/login" className="font-mono-bold text-[#5579d1]">
            Login
          </Link>
        </p>
      </section>
    </main>
  )
}

export default SignUp