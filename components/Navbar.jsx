'use client';

import Link from 'next/link';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <nav
            className={`${
                toggle ? 'mb-72' : 'mb-16'
            } flex-between sticky top-8 z-10 w-full mt-8 mb-16 px-10 py-3 rounded-full polymorph`}
        >
            {/* logo */}
            <Link href='/'>
                <p className='logo_text'>Dummy App</p>
            </Link>

            {/* Desktop Navbar */}
            <div className='w-[25%] hidden sm:flex sm:flex-between'>
                {/* Navigation */}
                <Link href='/about' className='item-glass rounded-full'>
                    About
                </Link>
                <Link href='/offers' className='item-glass rounded-full'>
                    Offers
                </Link>
                <Link href='/new' className='item-glass rounded-full'>
                    New launch
                </Link>
            </div>

            <div className='w-[25%] hidden sm:flex'>
                <Link href='/cart' className='item-glass rounded-full'>
                    Cart
                </Link>
                <Link href='/wishlist' className='item-glass rounded-full'>
                    Wish List
                </Link>
                <Link href='/profile' className='item-glass rounded-full'>
                    Profile
                </Link>
            </div>

            <div
                onClick={() => {
                    setToggle((prev) => !prev);
                }}
                className='flex sm:hidden'
            >
                <GiHamburgerMenu />
            </div>

            {/* mobile nav */}
            <div
                className={`w-[40%] p-2 text-right sm:hidden ${
                    toggle ? 'flex' : 'hidden'
                } flex-col absolute top-20 right-0 polymorph rounded-xl`}
            >
                <Link href='/about' className='item-glass rounded-full'>
                    About
                </Link>
                <Link href='/offers' className='item-glass rounded-full'>
                    Offers
                </Link>
                <Link href='/new' className='item-glass rounded-full'>
                    New launch
                </Link>
                <Link href='/cart' className='item-glass rounded-full'>
                    Cart
                </Link>
                <Link href='/wishlist' className='item-glass rounded-full'>
                    Wish List
                </Link>
                <Link href='/profile' className='item-glass rounded-full'>
                    Profile
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
