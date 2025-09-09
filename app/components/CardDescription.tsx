import React from 'react'
interface CardDescriptionProps {
    text: string;
    color?: string;
}

const CardDescription = ({ text, color = "#D4C47E" }: CardDescriptionProps) => {
    return (
        <div className='flex rounded-lg h-max-[60px] items-center w-full leading-[1.1] text-left' style={{backgroundColor: color}}>
            <div className="bg-[url('/rectangle4460.png')] bg-cover bg-center w-[44px] h-[60px] rounded-lg ">
            </div>
            <div className=' py-2 px-5'>
                <p className='text-[#1A18BB] font-extrabold text-[18px]'>{text}</p>
            </div>
        </div>
    )
}

export default CardDescription