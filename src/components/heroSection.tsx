import React from 'react';
import { Search } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-b from-amber-100 to-amber-50">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-amber-100 opacity-50"></div>
        <img
          src="/api/placeholder/1920/600"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-amber-900 mb-6 md:text-5xl lg:text-6xl">
            우리 강아지를 위한
            <br />
            최고의 미용실
          </h2>
          <p className="text-lg text-amber-800 mb-8 md:text-xl max-w-2xl mx-auto">
            전문가의 손길로 당신의 소중한 반려견을 케어해드립니다
          </p>

          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="지역, 매장명으로 검색해보세요"
              className="w-full px-6 py-4 pl-12 rounded-lg border-2 border-amber-200 focus:outline-none focus:border-amber-400 shadow-lg text-lg"
            />
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <Search className="w-6 h-6 text-amber-800" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
