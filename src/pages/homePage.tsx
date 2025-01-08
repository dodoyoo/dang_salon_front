import React from 'react';
import StoreList from '../components/storeList';
import '../styles/homePage.css';

const homePage: React.FC = () => {
  return (
    <div className="homePage">
      <header className="header">
        <h1>DangSalon - 애견 미용 예약 서비스</h1>
      </header>
      <main>
        <h2>가게 목록</h2>
        <StoreList />
      </main>
    </div>
  );
};

export default homePage;
