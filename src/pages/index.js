import DefaultLayout from '@/Layouts/DefaultLayout';
import Header from '@/components/Header/Header';
import Offers from '@/components/Offers/Offers';

export default function Home() {
  return (
    <DefaultLayout>
      <Header />
      <Offers />
    </DefaultLayout>
  );
}
