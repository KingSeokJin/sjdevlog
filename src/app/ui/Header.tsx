import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full bg-white pb-[10px] pt-[15px]">
      {/* [반응형 수정] px-4 (모바일) -> md:px-[139px] (PC) */}
      <div className="mx-auto flex w-full max-w-[1430px] flex-col gap-4 px-4 md:px-[139px]">
        <div className="flex items-center justify-between">
          {/* 왼쪽: 로고 */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-[32px] w-[32px] items-center justify-center rounded-[10px] bg-[#171717]">
              <span className="font-arimo text-[16px] font-normal leading-[24px] text-white">
                SJ
              </span>
            </div>
            <span className="font-arimo text-[16px] font-normal leading-[24px] text-[#171717]">
              sjdevlog
            </span>
          </Link>

          {/* 오른쪽: 검색창 및 버튼 */}
          <div className="flex items-center gap-4">
            {/* [반응형 수정] hidden md:block -> 모바일에서는 검색창 숨김 (공간 부족) */}
            <div className="relative hidden h-[36px] w-[256px] md:block">
              <input
                type="text"
                placeholder="검색..."
                className="h-full w-full rounded-[8px] border-[0.625px] border-[#E5E5E5] bg-[#FAFAFA] py-[4px] pl-[36px] pr-[12px] text-[14px] placeholder-gray-400 outline-none"
              />
              <Image
                src="/images/glasses.svg"
                alt="검색"
                width={16}
                height={16}
                className="absolute left-[12px] top-1/2 -translate-y-1/2"
              />
            </div>

            {/* 버튼 그룹 */}
            <div className="flex items-center gap-3">
              {/* 글 작성 버튼: 모바일에서는 '글 작성' 글자 숨기고 아이콘만 보여줄 수도 있지만 일단 유지 */}
              <button className="flex h-[32px] items-center justify-center gap-[6px] rounded-[10px] bg-[#171717] px-[10px] text-[14px] font-medium text-white md:px-[14px]">
                <Image
                  src="/images/writelogo.svg"
                  alt="글 작성"
                  width={14}
                  height={14}
                />
                {/* 모바일에서 텍스트가 너무 길면 아래 span에 hidden md:block 추가 고려 */}
                <span className="whitespace-nowrap">글 작성</span>
              </button>

              <button className="rounded-full p-1 transition-colors hover:bg-gray-100">
                <Image
                  src="/images/settings.svg"
                  alt="설정"
                  width={16}
                  height={16}
                />
              </button>

              <button className="rounded-full p-1 transition-colors hover:bg-gray-100">
                <Image
                  src="/images/moon.svg"
                  alt="다크모드"
                  width={16}
                  height={16}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
