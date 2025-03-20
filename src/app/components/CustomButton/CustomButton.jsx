import Image from "next/image";

const CustomButton = ({ text, containerStyles }) => {
    return (
        <button className={`${containerStyles} cursor-pointer overflow-hidden bg-gradient-to-r from-[#0D3317]/90 to-[#289944]/90
              px-4 text-white self-center transition-all duration-300 border border-[#289944] rounded-[999px] hover:shadow-[0px_0px_90px_0px_#289944B2]`}>
            <div className="flex items-center justify-center gap-4">
                {text}
                <Image
                    src={'/assets/hero/Ellipse-49.png'}
                    width={24}
                    height={24}
                    alt=""
                />
            </div>
        </button>
    );
};

export default CustomButton;
