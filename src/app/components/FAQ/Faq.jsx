import React from 'react'
import FAQAccordion from './FAQAccordion'

const Faq = () => {
    return (
        <div className='bg-[#1A1A1A] mx-5' id='faq'>
            <div className='max-w-[1312px] mx-auto flex flex-col lg:flex-row gap-6 justify-between px-4 lg:px-0 py-16'>
                <h1 className='text-5xl lg:text-8xl lg:max-w-[644px]'>Frequently <span className='text-[#AEAEAE] line-through'>Asked</span> Forecasted Questions</h1>
                <div>
                    <FAQAccordion></FAQAccordion>
                </div>
            </div>
        </div>
    )
}

export default Faq