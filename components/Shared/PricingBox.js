import React from 'react'
import PayButton from './PayButton'
import CourseutilTile from './CourseutilTile'
import ShopButton from './ShopButton'
export default function PricingBox({
    courseDetail,
    currency,
    prices,
    type,
    certificate,
    durationi,
    stream,
    updatedCurrency,
    
    course,
    coupon_code,
    course_type }) {
    return (
        <div className={`flex flex-col sticky  top-32  p-10 border-solid 
                        border-black border-2 w-[22vw] h-full 
                        justify-aroundbg-white ml-28 mb-4 sm:w-[75vw] 
                        sm:ml-4 sm:p-5 
                        `}>
            <p className="text-2xl font-bold text-center sm:text-lg sm:mx-1">{courseDetail.data.attributes.name}</p>
            <span className="text-base font-normal my-1 text-center">
                4.5 ⭐⭐⭐⭐⭐ (0251)
            </span>
            <div className="flex flex-wrap justify-between mt-2 ">
                <CourseutilTile src={durationi} des={`${courseDetail.data.attributes.duration} Hours`} />

                <CourseutilTile src={type} des="100% Online" />
                <CourseutilTile src={certificate} des="Digital Certificate" />

                <CourseutilTile src={stream} des="Live 1 to 1" />
            </div>
            <div className="flex row p-4 items-center justify-center">
                <span className="text-4xl font-bold text-black mx-2 sm:text-2xl">{currency} {prices.price}</span>
                <span className="text-xl font-normal line-through text-gray-600 mx-2 sm:text-sm">{currency}{updatedCurrency ? updatedCurrency : prices.discountedPrice}</span>
            </div>
            <ShopButton content="Add To Cart" primary={true} />
            {/* <ShopButton content="Buy Now" primary={false} /> */}
            <PayButton
                amount={prices.discountedPrice}
                course_id={course}
                course_type={course_type}
                coupon_code={coupon_code} />
        </div>
    )
}

