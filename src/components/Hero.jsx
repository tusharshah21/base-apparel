import React from 'react'
import bg_pattern from "../assets/bg-pattern-desktop.svg"
import herodesk from "../assets/hero-desktop.jpg"
import logo from "../assets/logo.svg"
import Newsletter from './Newsletter'
import mobiledesk from "../assets/hero-mobile.jpg"
export default function Hero() {
  return (
    <>
        <div className="lg:flex justify-center bg-[hsl(0,100%,98%)]">
      <div className="w-full lg:w-3/5 relative">
        <img src={bg_pattern} alt="Left Image" className="w-full min-h-full" />
        <div className="absolute top-0 left-0 w-full h-full flex text-center lg:text-left">
          <div className="text-black lg:mx-40 lg:my-12">
            <img src={logo} alt="logo" className="w-[40%] lg:pb-28 p-8 lg:p-0"/>     
            <img src={mobiledesk} alt="Left Image" className="w-full lg:hidden pb-12" />
            <h1 className="josefin-sans-light text-[3rem] lg:text-[4rem] 2xl:text-[5rem] text-[hsl(0,36%,70%)] tracking-[0.5rem] leading-[3rem] lg:leading-[4.5rem] 2xl:leading-[5rem]">WE'RE</h1>
            <p className="josefin-sans-semibold text-[3rem] lg:text-[4rem] 2xl:text-[5rem] text-[hsl(0,6%,24%)] tracking-[0.5rem] leading-[3rem] lg:leading-[4.5rem] 2xl:leading-[5rem]">COMING <br/>SOON</p>
            <p className="josefin-sans-regular text-md 2xl:text-lg text-[hsl(0,36%,70%)] py-8 2xl:py-12 2xl:pr-24 px-6 lg:px-0">
            Hello fellow shoppers! We're currently building our new fashion store. 
  Add your email below to stay up-to-date with announcements and our launch deals.
            </p>
            <Newsletter/>
          </div>
        </div>
      </div>
      <div className="hidden lg:block w-full lg:w-2/5">
        <img src={herodesk} alt="Right Image" className="w-full min-h-full object-cover" />
      </div>
    </div>
    </>
  )
}
