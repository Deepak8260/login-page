import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <main className="flex h-screen">
      {/* Left side - fixed width */}
      <section className="bg-[#a9c0f0] flex flex-col justify-between p-10 sm:p-16 md:p-20 w-[400px] rounded-tl-3xl rounded-bl-3xl">
        <div>
          <h1 className="text-white text-2xl sm:text-3xl leading-snug max-w-xs">
            Welcome back to <br />
            <span className="font-mono-bold text-[#5579d1] text-2xl sm:text-3xl">
              Design Spacee
            </span>
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

      {/* Right side - contained width with white background */}
      <section className="flex-1 bg-white p-10 sm:p-16 md:p-20 flex flex-col items-center justify-center rounded-tr-3xl rounded-br-3xl">
        <h2
          className="font-mono-bold text-black text-lg mb-8 select-none"
          style={{ letterSpacing: '0.05em' }}
        >
          Login
        </h2>

        <div className="flex gap-6 mb-10 w-full max-w-md">
          <button className="flex-1 bg-white border border-[#5579d1] rounded-md py-2 text-[9px] text-center text-[#5579d1] font-light tracking-widest">
            Login with Google
          </button>
          <button className="flex-1 bg-white border border-[#5579d1] rounded-md py-2 text-[9px] text-center text-[#5579d1] font-light tracking-widest">
            Login with Facebook
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
            type="email"
            placeholder="Email"
            className="bg-white border border-[#5579d1] rounded-md py-2 px-4 text-[9px] text-[#5579d1] font-light tracking-widest focus:outline-none focus:border-[#5579d1] placeholder-gray-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-white border border-[#5579d1] rounded-md py-2 px-4 text-[9px] text-[#5579d1] font-light tracking-widest focus:outline-none focus:border-[#5579d1] placeholder-gray-400"
          />
          <button
            type="submit"
            className="bg-[#5579d1] text-white font-mono-bold text-xs py-3 rounded-md tracking-widest"
          >
            Login
          </button>
        </form>

        <p className="text-[9px] text-center mt-6 max-w-md">
          Don't have an account?{' '}
          <Link to="/signup" className="font-mono-bold text-[#5579d1]">
            Create Account
          </Link>
        </p>
      </section>
    </main>
  )
}

export default Login