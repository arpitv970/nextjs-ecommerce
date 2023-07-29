import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className='flex-between w-full mt-8 mb-16 px-10 py-3 polymorph'>
            {/* logo */}
            <Link href='/'>
                <p className='logo_text'>Dummy App</p>
            </Link>

            {/* Desktop Navbar */}
            <div className=' w-[25%] flex-between'>
                {/* Navigation */}
                <Link href='/about' className='item-glass'>
                    About
                </Link>
                <Link href='/offers' className='item-glass'>Offers</Link>
                <Link href='/new' className='item-glass'>New launch</Link>
            </div>

            <div className=' w-[25%] flex-between'>
                <Link href='/cart' className='item-glass'>
                    Cart
                </Link>
                <Link href='/wishlist' className='item-glass'>
                    Wish List
                </Link>
                <Link href='/profile' className='item-glass'>
                    Profile
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
