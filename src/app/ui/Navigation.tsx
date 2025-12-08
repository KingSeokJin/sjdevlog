'use client';
import { useState } from 'react';

const Navigation = () => {
  const categories = ['All', 'Algorithm', 'Study', 'Tech', 'Project'];
  const [activeCategory, setActiveCategory] = useState('All');
  return (
    <nav className="w-full bg-white pb-[10px]">
      <div className="mx-auto flex w-full max-w-[1430px] gap-1 px-[139px]">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`flex items-center justify-center rounded-[10px] font-arimo text-[16px] leading-[24px] transition-colors ${
              activeCategory === category
                ? 'bg-[#171717] px-[16px] py-[6px] text-white' // 선택된 상태 스타일
                : 'px-[16px] py-[6px] text-[#171717] hover:bg-gray-100' // 기본 상태 스타일
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
