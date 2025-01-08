import React from 'react';
import { Search } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-amber-100 to-amber-50 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-amber-900 mb-6">
          우리 강아지를 위한 최고의 미용실
        </h2>
        <p className="text-lg text-amber-800 mb-8">
          전문가의 손길로 당신의 소중한 반려견을 케어해드립니다
        </p>

        <div className="max-w-2xl mx-auto relative">
          <input
            type="text"
            placeholder="지역, 매장명으로 검색해보세요"
            className="w-full px-6 py-4 rounded-lg border-2 border-amber-200 focus:outline-none focus:border-amber-400 shadow-sm"
          />
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <Search className="w-6 h-6 text-amber-800" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
