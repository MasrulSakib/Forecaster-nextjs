'use client';
import { useMediaQuery } from 'react-responsive';
import { Link as ScrollLink } from 'react-scroll';

const links = [
    { name: 'Home', target: 'hero', offset: -100 },
    { name: 'Features', target: 'features', offset: -80 },
    { name: 'Membership', target: 'membership', offset: -80 },
    { name: 'FAQ', target: 'faq', offset: 0 },
];


const MobileNav = ({ containerStyles, closeNav }) => {
    const isMobile = useMediaQuery({
        query: '(max-width: 640px)',
    });

    return (
        <div className={`${containerStyles}`}>
            {links.map((link, index) => (
                <ScrollLink
                    key={index}
                    to={link.target}
                    offset={link.offset}
                    smooth
                    spy
                    activeClass={!isMobile ? 'active' : ''}
                    className='border-b border-white/10 cursor-pointer hover:text-[#289944] py-6 transition-all'
                    onClick={closeNav} // Close mobile nav when a link is clicked
                >
                    {link.name}
                </ScrollLink>
            ))}
        </div>

    );
};

export default MobileNav;
