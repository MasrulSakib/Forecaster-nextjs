import Image from "next/image"
import CustomButton from "../CustomButton/CustomButton"

const Hero = () => {
    return (
        <div className="mx-5 pt-[136px] relative" id="hero">
            <div className="flex flex-col justify-center items-center lg:flex-row">
                <div className="order-2 lg:mt-0 lg:order-1 max-w-[641px] mt-4">
                    <h1 className="text-6xl font-semibold lg:text-[96px] mb-20">Real-time golf analysis from the future</h1>
                    <div className="flex flex-col gap-4 items-start mb-20">
                        <Image
                            src={'/assets/hero/stars-review.png'}
                            width={152}
                            height={24}
                            alt=""
                            className="-ml-4 overflow-hidden"
                        ></Image>
                        <p className="text-lg">“Now I’m hitting birdies instead of branches.”</p>
                        <div className="flex gap-4 items-center">
                            <Image
                                src={'/assets/hero/Tiger-Forests.png'}
                                width={32}
                                height={32}
                                alt=""
                            ></Image>
                            <p>Tiger Forests, USA</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 items-center lg:flex-row">
                        <CustomButton containerStyles="w-full lg:w-[224px] h-[56px]" text="Get Forecaster"></CustomButton>
                        <CustomButton containerStyles="w-full lg:w-[205px] h-[56px]" text="How it works"></CustomButton>
                    </div>

                </div>
                <div className="order-1 lg:order-2">
                    <Image
                        alt=""
                        src={'/assets/hero/Hero-image.png'}
                        width={705.836181640625}
                        height={700}
                    ></Image>
                </div>
            </div >
            <div className="mt-24">
                <div className="border-t max-w-[1312px] mx-auto py-16">
                    <div className="flex flex-col justify-center gap-[66px] items-start lg:flex-row">
                        <span className="text-[36px] tracking-[0%]">Meet Forecaster.</span>
                        <Image
                            src={'/assets/hero/Ellipse-49.png'}
                            width={37}
                            height={37}
                            alt=""
                            className="lg:my-3"
                        />
                        <p className="text-[36px] max-w-[867px]">The smart golf ball that delivers real-time audio feedback to your Bluetooth earbuds
                            and saves every swing’s data in the app for future analysis.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero