import React from 'react'
import FAQAccordion from './FAQAccordion'

const Faq = () => {
    return (
        <div className='bg-[#1A1A1A]' id='faq'>
            <div className='max-w-[1312px] lg:mx-auto flex flex-col lg:flex-row gap-6 justify-between py-16 mx-5'>
                <h1 className='text-5xl lg:text-8xl lg:max-w-[644px]'>Frequently <span className='text-[#AEAEAE] line-through'>Asked</span> Forecasted Questions</h1>
                <div>
                    <FAQAccordion></FAQAccordion>
                </div>
            </div>
        </div>
    )
}

export default Faq