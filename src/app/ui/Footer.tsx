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

  return (
    <footer className="h-[160px] w-full border-t border-[#E5E5E5] bg-white">
      {/* h-full을 줘서 160px 높이 안에서 내용물이 수직 중앙 정렬(items-center)되도록 함 
         Header, Grid와 동일한 가로폭(max-w-[1430px]) 및 패딩(px-[139px]) 적용
      */}
      <div className="mx-auto flex h-full w-full max-w-[1430px] items-center justify-between px-[139px]">
        {/* === 왼쪽: 로고 & 저작권 문구 === */}
        <div className="flex flex-col gap-3">
          {/* 로고 (Header와 동일한 스타일) */}
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

          {/* 저작권 문구 */}
          <p className="font-arimo text-[14px] font-normal text-[#737373]">
            © 2025 sjdevlog. All rights reserved.
          </p>
        </div>

        {/* === 오른쪽: 소셜 아이콘 === */}
        <div className="flex gap-4">
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

export default Footer;
