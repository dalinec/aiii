import Link from 'next/link';
import { navigationLinks } from '../navbarConsts';

const NavbarDesktop = () => {
  const NavigationLink = ({ title, link }) => {
    return (
      <Link href={link}>
        <div>{title}</div>
      </Link>
    );
  };

  return (
    <div className='bg-yellow-500 text-white py-8 hidden sm:block ease-in duration-300'>
      <div className=' px-8 max-w-7xl m-[0_auto]'>
        <div className='flex items-center justify-between '>
          <Link href={'/'}>
            <div className='text-2xl font-black tex'>AI HUB</div>
          </Link>
          <div className='flex gap-12 items-center font-medium '>
            {navigationLinks.map((item) => (
              <NavigationLink key={item.title} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarDesktop;
