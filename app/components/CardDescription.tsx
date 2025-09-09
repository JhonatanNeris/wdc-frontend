import React from 'react'
interface CardDescriptionProps {
    text: string;
    color?: string;
}

const CardDescription = ({ text, color = "#D4C47E" }: CardDescriptionProps) => {
    return (
        <div
            className="flex h-[60px] w-full items-center rounded-lg overflow-hidden text-left"
            style={{ backgroundColor: color }}
        >
            <div className="bg-[url('/rectangle4460.png')] bg-cover bg-center w-[44px] h-full rounded-lg flex-shrink-0" />
            <div className="flex-1 px-5">
                <p className="text-[18px] font-extrabold leading-[1.1] text-[#1A18BB]">
                    {text}
                </p>
            </div>
        </div>
    )
}

export default CardDescription