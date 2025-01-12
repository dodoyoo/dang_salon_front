import React from 'react';
import Header from '../components/header';
import HeroSection from '../components/heroSection';
import StoreList from '../components/storeList';
import Footer from '../components/footer';
import StoreCard from '../components/storeCard';

const SAMPLE_STORES = [
  {
    id: '1',
    name: '멍멍이 살롱',
    rating: 4.8,
    address: '서울시 강남구 역삼동 123-45',
    hours: '10:00 - 20:00',
    price: 50000,
    imageUrl: '/api/placeholder/400/300',
  },
  {
    id: '2',
    name: '댕댕 미용실',
    rating: 4.9,
    address: '서울시 서초구 서초동 456-78',
    hours: '09:00 - 19:00',
    price: 45000,
    imageUrl: '/api/placeholder/400/300',
  },
  {
    id: '3',
    name: '프리미엄 펫살롱',
    rating: 4.7,
    address: '서울시 강남구 삼성동 789-10',
    hours: '11:00 - 21:00',
    price: 55000,
    imageUrl: '/api/placeholder/400/300',
  },
];

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-amber-50">
      <Header />
      <HeroSection />
      <main className="flex-grow">
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-amber-900 mb-4">
                인기 애견미용실
              </h2>
              <p className="text-amber-800">
                고객님들이 가장 많이 찾는 미용실을 만나보세요
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SAMPLE_STORES.map((store) => (
                <StoreCard key={store.id} {...store} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-amber-900 mb-4">
                새로 등록된 미용실
              </h2>
              <p className="text-amber-800">
                최근에 댕살롱과 함께하게 된 미용실을 확인해보세요
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SAMPLE_STORES.map((store) => (
                <StoreCard key={store.id} {...store} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
