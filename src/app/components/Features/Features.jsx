import Image from "next/image"

const Features = () => {
    return (
        <div className="bg-[#1A1A1A]" id="features">
            <div className="max-w-[1312px] mx-5 lg:mx-auto pt-8">
                <h2 className="bg-gradient-to-b from-white from-[50.31%] to-[#999999] to-[100.31%] bg-clip-text text-transparent
                 text-5xl lg:text-[64px] font-semibold tracking-[-0.01em] text-center lg:text-start">
                    Features
                </h2>

                <div className="py-16">
                    <div className="flex lg:flex-row flex-col gap-6">
                        <Image
                            src={'/assets/features/Instant-Shot-Breakdown.png'}
                            width={533}
                            height={800}
                            alt=""
                            className="object-cover"
                        />
                        <div className="flex flex-col gap-6 justify-between">
                            <div className="bg-cover bg-center">
                                <Image
                                    src={'/assets/features/Real-time Audio Feedback.png'}
                                    layout="responsive"
                                    width={755}
                                    height={338}
                                    alt=""
                                    className="hidden lg:flex object-cover"
                                />
                                <Image
                                    src={'/assets/features/Real-time Audio Feedback-mobile.png'}
                                    layout="responsive"
                                    width={358}
                                    height={720}
                                    alt=""
                                    className="lg:hidden object-cover"
                                />
                            </div>
                            <div className="bg-black rounded-lg flex flex-col lg:flex-row gap-6 items-end pt-6 px-6">
                                <Image
                                    src={'/assets/features/Mobile-mockup.png'}
                                    width={397}
                                    height={763.4615478515625}
                                    alt=""
                                    className="object-cover order-2 lg:order-1"
                                />
                                <div className="flex flex-col gap-6 pb-6 order-1 lg:order-2">
                                    <h3 className="text-[40px]">Death By Data</h3>
                                    <p className="text-[18px] tracking-[0rem]">Every swing, slice, and missed put is stored in the app for review, so you can
                                        relive your worst shots whenever you want.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Features