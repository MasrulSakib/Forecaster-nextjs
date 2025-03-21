import CustomButton from "../CustomButton/CustomButton"

const membershipData = [
    {
        type: 'Basic',
        price: 'FREE',
        modes: '“Evil” mode only',
        data: 'No saved data',
        btnText: 'Get Basic'
    },
    {
        type: 'Pro',
        price: '$19/month',
        modes: '“Evil” and “Coach” modes',
        data: 'Basic analytics',
        btnText: 'Get Pro'
    },
    {
        type: 'Premium',
        price: '$39/month',
        modes: 'All feedback modes',
        data: 'Advanced analytics',
        btnText: 'Get Premium'
    }
]

const Membership = () => {
    return (
        <div className="mx-5 py-32" id="membership">
            <h2 className="bg-gradient-to-b from-white from-[50.31%] to-[#999999] to-[100.31%] bg-clip-text text-transparent text-center mb-16 text-5xl lg:text-[64px] font-semibold">
                Membership
            </h2>
            <p className="max-w-[718px] mx-auto text-lg lg:text-2xl text-center">If a $500 golf ball isn’t enough, you can improve our margins further by kindly providing us with recurring revenue.</p>
            <div className="flex flex-col lg:flex-row justify-center items gap-6 mx-auto py-16">
                {membershipData.map((membership, index) =>
                    <div className="max-w-[421px] w-full flex flex-col gap-6 bg-black border border-[#FFFFFF1A] hover:border-[#28994480]
                     hover:shadow-[0px_0px_100px_0px_#28994480] p-6 rounded-lg transition-all duration-300"
                        key={index}>
                        <h3 className="text-[32px] uppercase text-center">{membership.type}</h3>
                        <div className="border border-[#FFFFFF1A]"></div>
                        <h3 className="text-[24px] font-semibold text-center">{membership.price}</h3>
                        <div className="border border-[#FFFFFF1A]"></div>
                        <p className="text-lg text-center">{membership.modes}</p>
                        <div className="border border-[#FFFFFF1A]"></div>
                        <p className="text-lg text-center">{membership.data}</p>
                        <div className="border border-[#FFFFFF1A]"></div>
                        <CustomButton containerStyles='pl-[32px] pr-[20px] py-[16px]' text={membership.btnText}></CustomButton>
                    </div>
                )}
            </div>
            <p className="text-center">*Plans and prices are subject to change based on the whims of our CFO.</p>
        </div>
    )
}

export default Membership