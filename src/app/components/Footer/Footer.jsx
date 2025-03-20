import Image from "next/image"

const Footer = () => {
    return (
        <div className="lg:px-0 max-w-[1312px] mx-auto overflow-hidden px-5 py-16">
            <div className="flex justify-between items-center lg:px-0 mx-auto pb-16">
                <Image
                    src="/assets/footer/logo-icon.png"
                    alt="Logo Icon"
                    width={256}
                    height={256}
                    className="h-[70px] w-[70px] lg:h-[256px] lg:w-[256px]"
                />

                <h1 className="text-[45.92px] font-semibold lg:text-[204.8px]">Forecaster</h1>
            </div>
            <div className="flex bg-[#FFFFFF26] justify-between p-4 rounded-lg items-center relative">
                <div className="flex gap-6 items-center">
                    <Image
                        className=""
                        src={'/assets/footer/instagram.svg'}
                        width={24}
                        height={24}
                        alt=""
                    />
                    <Image
                        className=""
                        src={'/assets/footer/X (Twitter).svg'}
                        width={24}
                        height={24}
                        alt=""
                    />
                    <Image
                        className=""
                        src={'/assets/footer/youtube.svg'}
                        width={24}
                        height={24}
                        alt=""
                    />
                </div>
                <p className="text-base text-center">© 2025 Flux Academy</p>
                <Image
                    src={'/assets/footer/Ellipse-50.png'}
                    alt=""
                    width={362}
                    height={195}
                    className="flex h-auto w-full -bottom-30 absolute left-0 lg:hidden object-cover opacity-80 right-0 z-0"
                />

            </div>
        </div>
    )
}

export default Footer