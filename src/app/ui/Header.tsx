import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full bg-white pb-[10px] pt-[15px]">
      <div className="mx-auto flex w-full max-w-[1430px] flex-col gap-4 px-[139px]">
        {/* === [상단 영역] 로고, 검색, 버튼 그룹 === */}
        <div className="flex items-center justify-between">
          {/* 왼쪽: 로고 및 타이틀 */}
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

          {/* 오른쪽: 검색창 및 버튼 그룹 */}
          <div className="flex items-center gap-4">
            {/* 검색창 */}
            <div className="relative h-[36px] w-[256px]">
              <input
                type="text"
                placeholder="검색..."
                className="h-full w-full rounded-[8px] border-[0.625px] border-[#E5E5E5] bg-[#FAFAFA] py-[4px] pl-[36px] pr-[12px] text-[14px] placeholder-gray-400 outline-none"
              />
              <Image
                src="/images/glasses.svg"
                alt="검색"
                width={16} // 적절한 크기 추정
                height={16}
                className="absolute left-[12px] top-1/2 -translate-y-1/2"
              />
            </div>

            {/* 버튼 그룹 */}
            <div className="flex items-center gap-3">
              {/* 글 작성 버튼 */}
              <button className="padding-[4.621px 13.924px 7.371px 10px] flex h-[32px] items-center justify-center gap-[6px] rounded-[10px] bg-[#171717] px-[14px] text-[14px] font-medium text-white">
                <Image
                  src="/images/writelogo.svg"
                  alt="글 작성"
                  width={14} // 적절한 크기 추정
                  height={14}
                />
                <span>글 작성</span>
              </button>

              {/* 설정 버튼 */}
              <button className="rounded-full p-1 transition-colors hover:bg-gray-100">
                <Image
                  src="/images/settings.svg" // [주의] 실제 파일 경로 확인 필요
                  alt="설정"
                  width={16}
                  height={16}
                />
              </button>

              {/* 다크모드 전환 버튼 */}
              <button className="rounded-full p-1 transition-colors hover:bg-gray-100">
                <Image
                  src="/images/moon.svg" // [주의] 실제 파일 경로 확인 필요
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
