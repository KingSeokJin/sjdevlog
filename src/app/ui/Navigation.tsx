'use client';
import { useState } from 'react';

const Navigation = () => {
  const categories = ['All', 'Algorithm', 'Study', 'Tech', 'Project'];
  const [activeCategory, setActiveCategory] = useState('All');
  return (
    <nav className="w-full bg-white pb-[10px]">
      {/* 스크롤바 숨기기 클래스 추가
         1. [&::-webkit-scrollbar]:hidden -> 크롬, 사파리, 엣지용
         2. [-ms-overflow-style:none] -> IE, 구형 엣지용
         3. [scrollbar-width:none] -> 파이어폭스용
      */}
      {/* [반응형 수정] 
          1. px-4 md:px-[139px] : 패딩 조절
          2. overflow-x-auto : 모바일에서 내용 넘치면 가로 스크롤
          3. no-scrollbar : 스크롤바 숨기기 (globals.css에 설정 필요하지만 없어도 작동함)
      */}
      <div className="mx-auto flex w-full max-w-[1430px] gap-1 overflow-x-auto px-4 [-ms-overflow-style:none] [scrollbar-width:none] md:px-[139px] [&::-webkit-scrollbar]:hidden">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            // whitespace-nowrap: 글자가 줄바꿈되지 않게 방지
            className={`flex shrink-0 items-center justify-center whitespace-nowrap rounded-[10px] font-arimo text-[16px] leading-[24px] transition-colors ${
              activeCategory === category
                ? 'bg-[#171717] px-[16px] py-[6px] text-white'
                : 'px-[16px] py-[6px] text-[#171717] hover:bg-gray-100'
            } `}
          >
            {category}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
