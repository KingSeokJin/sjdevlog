'use client';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const socialLinks = [
    {
      name: 'github',
      icon: '/images/githublogo.svg',
      href: 'https://github.com/KingSeokJin',
    },
    {
      name: 'instagram',
      icon: '/images/Instagram_icon.svg',
      href: 'https://www.instagram.com/sjin_in_star',
    },
    {
      name: 'mail',
      icon: '/images/mail.svg',
      href: 'mailto:sjin7629@gmail.com', // [참고] 메일은 보통 mailto:를 씁니다 (원하시면 URL로 유지 가능)
    },
  ];

  // (socialLinks 데이터 선언 부분은 기존과 동일하므로 생략하거나 그대로 두세요)
  // ...

  return (
    <footer className="w-full border-t border-[#E5E5E5] bg-white">
      {/* [반응형 수정]
          1. h-auto md:h-[160px] : 모바일 높이 자동
          2. px-4 md:px-[139px]
          3. flex-col md:flex-row : 모바일 세로, PC 가로
          4. py-8 md:py-0 : 모바일 위아래 여백
          5. gap-6 md:gap-0 : 모바일 요소 간격
      */}
      <div className="mx-auto flex h-auto w-full max-w-[1430px] flex-col items-center justify-between gap-6 px-4 py-8 md:h-full md:flex-row md:gap-0 md:px-[139px] md:py-0">
        {/* 왼쪽: 로고 & 저작권 */}
        <div className="flex flex-col items-center gap-3 md:items-start">
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
          <p className="text-center font-arimo text-[14px] font-normal text-[#737373] md:text-left">
            © 2025 sjdevlog. All rights reserved.
          </p>
        </div>

        {/* 오른쪽: 소셜 아이콘 */}
        <div className="flex gap-4">
          {/* ... 기존 map 코드 동일 ... */}
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank" // 새 탭에서 열기
              rel="noopener noreferrer" // 보안상 권장
              className="opacity-70 transition-opacity hover:opacity-100"
            >
              <Image
                src={social.icon}
                alt={social.name}
                width={24} // Footer 아이콘은 보통 조금 더 크게(20~24px) 잡습니다
                height={24}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
// (socialLinks 데이터가 누락되었다면 기존 코드에서 복사해서 넣으세요)
export default Footer;
