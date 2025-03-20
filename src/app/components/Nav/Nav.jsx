'use client';

import { Link as ScrollLink } from 'react-scroll'

const links = [
    { name: 'Home', target: 'hero', offset: -100 },
    { name: 'Features', target: 'features', offset: -80 },
    { name: 'Membership', target: 'membership', offset: -80 },
    { name: 'FAQ', target: 'faq', offset: 0 },
];


const Nav = ({ containerStyles }) => {
    return (
        <div className={`${containerStyles}`}>
            {links.map((link) => (
                <ScrollLink
                    key={link.target}
                    to={link.target}
                    offset={link.offset}
                    smooth
                    spy
                    activeClass='active'
                    className='cursor-pointer hover:text-[#289944] transition-all'
                >
                    {link.name}
                </ScrollLink>
            ))}
        </div>
    );
}

export default Nav;
