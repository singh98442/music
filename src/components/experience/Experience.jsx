import React from 'react'
import { experienceData } from '../../data/Data'

const Experience = () => {
    return (
        <div className='experience bg-gray-500 items-center justify-center flex flex-col p-[1rem] gap-[1rem]'>
            <span className=' items-center flex italic text-[2rem]'>
                <b>Experience Of Music</b>
            </span>
            <div className="items flex">
                {experienceData.map((item, index) => {
                    return (
                        <div className="experience1 flex justify-around items-center flex-col gap-[1rem]" key={index}>
                            <span>{item.img}</span>
                            <span>{item.header}</span>
                            <span>{item.title}</span>
                            <span className=" text-yellow-300 cursor-pointer">Read more....</span>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Experience
