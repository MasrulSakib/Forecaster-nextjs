'use client';
import { useState } from "react";

const faqs = [
    { question: "What happens if my ball gets destroyed?", answer: "We'll mourn its loss and send you a replacement for only $500 (plus shipping and handling)." },
    { question: "Does this work for left-handed players?", answer: "Yes, but it might judge you a little." },
    { question: "Can Forecaster fix my swing?", answer: "No, but it will roast it in high-definition audio." },
    { question: "Does the ball work without Bluetooth?", answer: "Yes, but you’ll miss out on its charming commentary like, “That’s going WAY out of bounds.”" },
    { question: "Is this real?", answer: "About as real as the chances of you winning The Open. No, it’s part of Flux Academy’s Figma course." }
];

const FAQAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className=" mx-auto rounded-lg">
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className="bg-black p-6 rounded-lg border-b border-[#FFFFFF1A] mb-[15px]"
                >
                    <button
                        className="w-full flex justify-between items-center gap-6 text-white text-lg font-semibold"
                        onClick={() => toggleAccordion(index)}
                    >
                        <h3 className="text-xl lg:text-2xl font-semibold text-start">{faq.question}</h3>
                        <span className="text-2xl font-medium transition-all duration-300">
                            {activeIndex === index ? "⨯" : "+"}
                        </span>
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? "max-h-40 opacity-100 py-4" : "max-h-0 opacity-0 py-0"}`}
                    >
                        <p className="text-white text-lg">{faq.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQAccordion;
