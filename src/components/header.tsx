import React from 'react';
import { Search } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-12">
            <h1 className="text-2xl font-bold text-amber-800">DangSalon</h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-amber-900 hover:text-amber-700">
                홈
              </a>
              <a href="#" className="text-amber-900 hover:text-amber-700">
                매장찾기
              </a>
              <a href="#" className="text-amber-900 hover:text-amber-700">
                예약확인
              </a>
              <a href="#" className="text-amber-900 hover:text-amber-700">
                이용안내
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-amber-900 hover:text-amber-700">
              로그인
            </button>
            <button className="px-4 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-700 transition-colors">
              회원가입
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
