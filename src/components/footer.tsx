import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-amber-900 text-amber-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">DangSalon</h3>
            <p className="text-amber-200">
              우리 강아지를 위한 최고의 미용 서비스
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">고객센터</h4>
            <p>평일 10:00 - 18:00</p>
            <p>주말 및 공휴일 휴무</p>
            <p className="mt-2">1588-1234</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">바로가기</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  이용약관
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  개인정보처리방침
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  자주 묻는 질문
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
