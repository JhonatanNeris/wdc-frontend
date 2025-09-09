import Image from "next/image";

type Props = {
  src: string;
  title: string;
  text: string;
};

const BORDER_PX = 4; 


const CardSlider = ({ src, title, text }: Props) => {
  return (
    <div className='w-[270px] h-full border-4 border-[#D4C47E] rounded-2xl bg-[#1A18BB] flex flex-col relative justify-between '>
      {/* <div className=" w-[270px] border-4 border-[#D4C47E] rounded-2xl flex justify-center items-center"> */}
      <div className="bg-[#D4C47E] rounded-2xl relative">
        {/* IMAGEM DO ESPORTE */}
        <Image
          src={src}
          alt="Esporte"
          width={270}
          height={270}
          className=" w-full object-cover block h-[215px]"
        />
        {/* BANDEIRA */}
        <Image
          src="/BR.svg"
          alt="Bandeira brasileira"
          width={270}
          height={270}
          className=" w-[20px] h-auto absolute top-6 right-6 z-10"
        />

        {/* BORDA DA FOTO exatamente sobre a borda externa */}
        <div
          className="pointer-events-none absolute z-10 rounded-2xl border-4 border-[#D4C47E]"
          style={{
            top: -BORDER_PX,
            left: -BORDER_PX,
            right: -BORDER_PX,
            height: 215 + BORDER_PX, // cobre a altura da imagem + metade da borda de baixo
          }}
        />
      </div>

      <div className="flex flex-1 flex-col text-center h-full justify-between">
        <>
          <Image
            src="/arrowright.svg"
            alt="Seta"
            width={270}
            height={270}
            className=" mt-5 mb-1 w-[122px] h-auto mx-auto"
          />

          <div className='px-6'>
            <h1 className='text-[#D4C47E] text-[22px] mb-1 uppercase'>{title}</h1>
            <p className='text-[#D9D9D9] text-[16px] mb-5 font-[300]'>{text}</p>
          </div>
        </>

        <Image
          src="/rectangleCard.svg"
          alt="Esporte"
          width={270}
          height={270}
          // className=" w-[270px] h-auto"
          className="h-9 w-[270px] object-cover "

        />
      </div>


    </div>
  )
}

export default CardSlider