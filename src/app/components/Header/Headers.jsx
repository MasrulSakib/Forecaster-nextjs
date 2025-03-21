'use client';
import React, { useEffect, useState } from 'react';
import Nav from '../Nav/Nav';
import Link from 'next/link';
import Image from 'next/image';
import { MdMenu, MdClose } from 'react-icons/md';
import MobileNav from '../MobileNav/MobileNav';
import CustomButton from '../CustomButton/CustomButton';

const Headers = () => {
    const [headerActive, setHeaderActive] = useState(false);
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHeaderActive(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`${headerActive ? 'h-[100px]' : 'h-[136px]'} fixed top-0 w-full max-w-[1920px] bg-black text-white transition-all duration-300 z-50`}>
            <div className='relative'>
                <Image
                    src={'/assets/header/top-green-glows.png'}
                    width={1920}
                    height={86.71}
                    className='-top-15 absolute left-0 object-cover right-0'
                    alt=''
                />
            </div>
            <div
                className={`
                    ${headerActive ? 'h-[60px] my-5' : 'h-[72px] my-8'}
                    w-[calc(100%-40px)] xxl:w-full max-w-[1312px] mx-auto text-white bg-[#FFFFFF26] rounded-lg
                    transition-all duration-300 flex items-center justify-between px-6 relative
                `}
            >

                {/* Logo */}
                <Link className='flex gap-[8.5px] items-center' href=''>
                    <Image src='/assets/header/logo-icon.png' width={40} height={40} alt='Logo' />
                    <h2 className='text-[32px]'>Forecaster</h2>
                </Link>

                {/* Desktop Navigation */}
                <Nav containerStyles='py-12 flex gap-24 hidden text-base font-medium transition-all xl:flex' />

                {/* Mobile Menu Button */}
                <div className='xl:hidden'>
                    <button onClick={() => setOpenNav(true)} className='flex text-white items-center'>
                        <MdMenu className='text-4xl' />
                    </button>
                </div>

                {/* Mobile Navigation Dropdown */}
                <div
                    className={`
                        fixed inset-0 bg-black text-white flex flex-col items-center justify-start
                        transition-all duration-300 ease-in-out overflow-scroll ${openNav ? 'opacity-100 visible' : 'opacity-0 invisible'}
                    `}
                >
                    {/* Close Button - Right */}
                    <button
                        className='text-3xl text-white absolute right-5 top-5'
                        onClick={() => setOpenNav(false)}
                    >
                        <MdClose />
                    </button>

                    {/* Logo (Left) */}
                    <Link className='flex absolute gap-[8.5px] items-center left-5 top-5' href=''>
                        <Image src='/assets/header/logo-icon.png' width={32} height={32} alt='Logo' />
                        <h2 className='text-[27.44px]'>Forecaster</h2>
                    </Link>

                    {/* Image Below Logo */}
                    <Image
                        src='/assets/header/peter-drew-C5B3AMsBep8-unsplash 2.png'
                        width={342}
                        height={240}
                        alt='Menu Image'
                        className='rounded-lg mt-[88px]'
                    />

                    {/* Navigation Links with Borders */}
                    <MobileNav
                        containerStyles={`
                            ${openNav ? 'max-h-[70vh] pb-6 mt-5' : 'max-h-0 pt-0 pb-0 overflow-hidden'}
                            xl:hidden text-white flex flex-col gap-4 w-[calc(100%-40px)] mx-5 left-0 bg-black text-left text-base
                             font-medium transition-all duration-300 overflow-y-auto
                        `}
                        closeNav={() => setOpenNav(false)}
                    />

                    {/* Button at Bottom */}
                    <CustomButton onClick={() => setOpenNav(false)} containerStyles="w-[342px] min-h-[68px] text-[24px] font-semibold mb-6" text="Get Forecaster"></CustomButton>
                </div>
            </div>
        </header>
    );
};

export default Headers;
