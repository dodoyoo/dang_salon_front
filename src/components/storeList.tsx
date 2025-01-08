import React, { useState, useEffect } from 'react';
import StoreCard from './storeCard';

interface Store {
  id: string;
  name: string;
  rating: number;
  address: string;
  hours: string;
  price: number;
  imageUrl: string;
}

const StoreList: React.FC = () => {
  const [stores, setStores] = useState<Store[]>([]);
  const [sortBy, setSortBy] = useState('latest');

  useEffect(() => {
    // API 호출 구현
    // fetch('/api/stores')...
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-8">
        <div className="flex space-x-4">
          <button className="px-4 py-2 rounded-md bg-amber-800 text-white hover:bg-amber-700">
            전체보기
          </button>
          <button className="px-4 py-2 rounded-md bg-white text-amber-800 border border-amber-200 hover:border-amber-400">
            리뷰순
          </button>
          <button className="px-4 py-2 rounded-md bg-white text-amber-800 border border-amber-200 hover:border-amber-400">
            거리순
          </button>
        </div>
        <select
          className="px-4 py-2 rounded-md border border-amber-200 text-amber-800"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="latest">최신순</option>
          <option value="rating">평점순</option>
          <option value="price">가격순</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stores.map((store) => (
          <StoreCard key={store.id} {...store} />
        ))}
      </div>
    </div>
  );
};

export default StoreList;
