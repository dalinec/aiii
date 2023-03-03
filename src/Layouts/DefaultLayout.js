import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
