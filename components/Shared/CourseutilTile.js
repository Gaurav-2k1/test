import React from 'react'
import Image from "next/image";

export default function CourseutilTile({ src, content, des }) {
    return (
        <div className="flex flex-row h-12 w-50 sm:w-28">
            <Image src={src} alt="" objectFit="contain" className="flex align-top" />
            <span className='px-3 flex flex-col justify-items-center sm:px-2'>
                <p className='text-gray-500'>
                    {content}
                </p>
                <p className='text-blue text-sm font-medium '>
                    {des}
                </p>
            </span>
        </div>
    )
}

