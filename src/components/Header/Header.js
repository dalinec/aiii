const Header = () => {
  return (
    <div className='bg-hero bg-cover h-screen flex items-start'>
      <div className='max-w-7xl m-[0_auto] p-8 bg-fixed '>
        <div className='flex flex-col justify-center items-center'>
          <div className='text-8xl mb-12'>
            <strong>AI</strong> <light>HUB</light>
          </div>
          <div className='font-bold text-4xl text-center w-3/5'>
            Spájame HR odborníkov a profesionálov, ktorých zaujímajú AI témy.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
