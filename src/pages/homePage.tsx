import React from 'react';
import Header from '../components/header';
import HeroSection from '../components/heroSection';
import StoreList from '../components/storeList';
// import Footer from '../components/footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
      <HeroSection />
      <StoreList />
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
