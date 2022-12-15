import React from 'react'

export default function ShopButton({ content, primary }) {
    return (
        <div className={`${primary ? "bg-secondary" : "bg-white"} 
        ${primary ? "text-white" : "text-secondary"}
                text-center p-5 my-2 font-semibold text-xl 
                border-solid border-black border-2 cursor-pointer
                hover:scale-105 transition-all ease-linear sm:p-2`}>
            {content}
        </div>
    )
}
