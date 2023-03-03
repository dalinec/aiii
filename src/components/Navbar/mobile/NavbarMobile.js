import Link from 'next/link';
import { navigationLinks } from '../navbarConsts';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const NavbarMobile = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const NavigationLink = ({ title, link }) => {
    return <Link href={link}>{title}</Link>;
  };
  return (
    <>
      {/* Mobile Button */}
      <div className='bg-yellow-500 text-white py-8 flex sm:hidden'>
        <div className='px-8 w-full'>
          <div className='flex items-center justify-between'>
            <Link href={'/'}>
              <div className='text-2xl font-black '>AI HUB</div>
            </Link>
            <div className='block sm:hidden z-10 ' onClick={handleNav}>
              {nav ? (
                <AiOutlineClose className=' w-5 h-5 ' size={40} />
              ) : (
                <AiOutlineMenu className=' w-5 h-5' size={20} />
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          nav
            ? 'absolute top-0 left-0 right-0 bottom-0 w-full h-screen flex items-center bg-yellow-500 text-white text-center ease-in duration-300'
            : 'absolute top-0 left-[-100%] right-0 bottom-0 w-full h-screen flex items-center  text-transparent text-center ease-in duration-300'
        }
      >
        <div className=' font-bold text-5xl w-full flex flex-col gap-9'>
          {navigationLinks.map((item) => (
            <NavigationLink key={item.title} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default NavbarMobile;
