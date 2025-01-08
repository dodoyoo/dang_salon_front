import React from 'react';

const StoreList: React.FC = () => {
  const stores = [
    {
      id: 1,
      name: '댕댕댕',
      location: '서울',
    },
    { id: 2, name: '깍뽁', location: '부산' },
  ];

  return (
    <div className="store-list">
      {stores.map((store) => (
        <div key={store.id} className="store-item">
          <h2>{store.name}</h2>
          <p>{store.location}</p>
          <a href={`/store/${store.id}`}>자세히 보기</a>
        </div>
      ))}
    </div>
  );
};

export default StoreList;
