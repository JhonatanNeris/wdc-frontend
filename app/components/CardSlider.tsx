import React from 'react'
import Image from "next/image";

type Props = {
  src: string;
  title: string;
  text: string;
};

const CardSlider = ({ src, title, text }: Props) => {
  return (
    <div className='w-[270px] border-4 border-[#D4C47E] rounded-2xl bg-[#1A18BB] flex flex-col relative overflow-hidden pt-[270px]"'>
      <div className=" w-[270px] border-4 border-[#D4C47E] rounded-2xl flex justify-center items-center">
        <Image
          src={src}
          alt="Esporte"
          width={270}
          height={270}
          className=" w-full object-cover "
        />
      </div>

      <Image
        src="/BR.svg"
        alt="Esporte"
        width={270}
        height={270}
        className=" w-[20px] h-auto absolute top-6 right-6 z-10"
      />
      <Image
        src="/arrowright.svg"
        alt="Seta"
        width={270}
        height={270}
        className=" my-5 w-[122px] h-auto mx-auto"
      />


      <div className='px-6 text-center'>
        <h2 className='text-[#D4C47E] text-[22px] mb-1 uppercase'>{title}</h2>
        <p className='text-[#D9D9D9] text-[16px] mb-5'>{text}</p>
      </div>

      <Image
        src="/rectangleCard.svg"
        alt="Esporte"
        width={270}
        height={270}
        // className=" w-[270px] h-auto"
        className="h-9 w-[270px] object-cover"

      />
    </div>
  )
}

export default CardSlider