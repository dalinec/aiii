import Link from 'next/link';
import Image from 'next/image';
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineWhatsApp,
  AiFillMail,
} from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='bg-yellow-400 text-white py-10'>
      <div className='max-w-7xl m-[0_auto] px-8 flex flex-col sm:flex-row gap-10 '>
        <div className='w-full sm:w-1/2'>
          <div className='font-bold mb-5 text-xl'>O AI HUB</div>
          <p className='text-sm'>
            HR HUB je aktívnou skupinou HR nadšencov, ktorá funguje na základe
            definovaných hodnôt a cieľov. Začali sme na východe Slovenska a
            postupne rozširujeme aktivity aj do iných regiónov. Snažíme sa
            pokrývať všetky aspekty HR a aj biznisu a zdieľať si navzájom
            skúsenosti, diskutovať a navzájom sa inšpirovať k vytváraniu
            kvalitnejšieho HR na Slovensku.
          </p>
        </div>
        <div className='flex justify-start '>
          <div className='flex flex-col'>
            <div className='font-bold mb-5 text-xl'>Kontakty</div>
            <div className='flex gap-1 mb-3'>
              <Link href={'https://www.facebook.com/AIhub.sk'}>
                <AiFillFacebook size={30} />
              </Link>
              <Link href={'https://www.linkedin.com/company/aihub-sk/'}>
                <AiFillLinkedin size={30} />
              </Link>
              <Link href={'https://api.whatsapp.com/send?phone=421948942804'}>
                <AiOutlineWhatsApp size={30} />
              </Link>
            </div>
            <div className='flex flex-col'>
              <Link href={'info@aihub.sk'} className='flex gap-1 items-center'>
                <AiFillMail size={20} />
                info@aihub.sk
              </Link>
              <Link
                href={'tel:+421948942804'}
                className='flex gap-1 items-center '
              >
                <BsFillTelephoneFill />
                +421 948 942 804
              </Link>
            </div>
          </div>
          <div className='flex flex-col ml-10'>
            <div className='font-bold mb-5 text-xl'>Partneri</div>
            <Link href={'https://www.scaleupacademy.sk/'}>
              <Image
                src={'/static/logo-it_valley.png'}
                width='100'
                height='100'
                alt='logo'
              />
            </Link>
            <Link href={'http://www.kosiceitvalley.sk/'}>
              <Image
                src={'/static/logo-sua.png'}
                width='100'
                height='100'
                alt='logo'
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
