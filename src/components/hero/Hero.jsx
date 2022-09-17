import React from 'react'

const Hero = () => {
  return (
    <div className='hero flex justify-between w-[100%] h-[110vh] bg-slate-500 rounded-b-[5rem]'>
        <div className="left w-[50%] flex flex-col text-[3rem] items-start justify-center pl-[1.5rem] h-[100%] relative">
            <span>
                Experience The
            </span>
            <span>
                <b>Best Quality Music</b>
            </span>
            <span className='text-[15px] text-orange-800 indent-8'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti molestiae, tempore itaque veniam reprehenderit ad!
            </span>
            <div className="app gap-9">
                <span className='text-[1rem] font-bold'>download now on the apple and IOS</span>
                <span className='flex gap-8'>
                    <img className=' cursor-pointer' src={require("../../img/App Store.png")} alt="apple store" />
                    <img className=' cursor-pointer' src={require("../../img/Google Play.png")} alt="apple store" />
                </span>
            </div>
        </div>
        <div className="right w-[50%] relative">
            {/* <img className=' absolute w-[100%] h-[100%] left-0 rounded-tb-[70px] rounded-l-3xl' src={require("../../img/backgraphics.png")} alt="" /> */}
            <img className=' absolute h-[80%] right-20 rounded-[20px] object-cover rotate-[20deg] bottom-10' src={require("../../img/music.jpg")} alt="" />
            {/* <img className=' absolute object-cover' src={require("../../img/d2.png")} alt="" /> */}
            {/* <img className=' absolute object-cover' src={require("../../img/d3.png")} alt="" /> */}
            <img className=' absolute object-cover left--100 top-6 rotate-[15deg]' src={require("../../img/d4.png")} alt="" />
        </div>
      
    </div>
  )
}

export default Hero
