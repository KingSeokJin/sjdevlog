import Image from 'next/image';
import Link from 'next/link';

const Profile = () => {
  //통계 데이터
  const stats = [
    { label: 'Posts', value: 24 },
    { label: 'Categories', value: 4 },
    { label: 'Projects', value: 12 },
  ];

  // 각종 링크
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
      href: 'https://github.com/KingSeokJin',
    },
  ];
  return (
    <section className="w-full bg-white">
      {/* 전체 컨테이너: 높이 383px, 양옆 패딩 139px, 가운데 정렬 */}
      <div className="mx-auto flex h-[383px] w-full max-w-[1430px] items-center justify-between px-[139px]">
        {/* =========================================
            1. 왼쪽 영역: 텍스트 컨텐츠 (높이 252px)
           ========================================= */}
        <div className="flex h-[252px] flex-col items-start justify-between">
          {/* 상단 텍스트 그룹 */}
          <div className="flex flex-col items-start gap-4">
            {/* 뱃지 */}
            <span className="inline-flex items-center justify-center rounded-full bg-[#F5F5F5] py-[5px] pl-[11.99px] pr-[14.33px]">
              <span className="font-arimo text-[14px] font-bold text-[#171717]">
                {' '}
                {/* 폰트 사이즈 임의 지정 (보통 12~14px) */}
                Frontend Developer
              </span>
            </span>

            {/* 인사말 */}
            <h1 className="font-arimo text-[16px] font-normal leading-[24px] text-[#171717]">
              안녕하세요, 개발자 SJ입니다
            </h1>

            {/* 소개글 */}
            <p className="max-w-[480px] font-arimo text-[16px] font-normal leading-[24px] text-[#525252]">
              기술적 성장을 기록하고 공유하는 공간입니다. 알고리즘, 프로젝트
              <br />
              경험, 새로운 기술 학습 과정을 카테고리별로 정리하여 개발자로서의
              <br />
              여정을 문서화합니다.
            </p>
          </div>

          {/* 하단 버튼 그룹 */}
          <div className="flex flex-col gap-4">
            {/* 소셜 아이콘들 (8px 간격) */}
            <div className="flex gap-[8px]">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-[10px] border border-[#E5E5E5] transition-colors hover:bg-gray-50"
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={16}
                    height={16}
                  />
                </Link>
              ))}
            </div>

            {/* 포트폴리오 보기 버튼 */}
            <button className="inline-flex items-center justify-center gap-[24px] rounded-[8px] border border-solid border-[#171717] bg-white py-[8px] pl-[12.61px] pr-[12.61px] hover:bg-gray-50">
              <span className="font-arimo text-[14px] font-normal text-[#171717]">
                포트폴리오 보기
              </span>
              <Image
                src="/images/portfolio.svg" // [주의] 파일 확인 필요
                alt="arrow"
                width={16}
                height={16}
              />
            </button>
          </div>
        </div>

        {/* =========================================
            2 & 3. 오른쪽 영역: 프로필 사진 + 통계
            (하나의 flex 그룹으로 묶고 gap 32px)
           ========================================= */}
        <div className="flex items-center gap-[32px]">
          {/* 2. 프로필 사진 영역 */}
          {/* w, h 비율을 유지하며 컨테이너에 맞춤 */}
          <div className="relative h-[252px] w-[229px] overflow-hidden rounded-[20px] bg-gray-100">
            <Image
              src="/images/myprofile.png"
              alt="Profile"
              fill
              className="object-cover" // 이미지가 영역을 꽉 채우도록 설정
            />
          </div>

          {/* 3. 통계 영역 */}
          <div className="flex flex-col gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-end">
                {/* 숫자 */}
                <span className="font-arimo text-[16px] font-normal text-[#171717]">
                  {stat.value}
                </span>
                {/* 라벨 (영어) */}
                <span className="text-right font-arimo text-[16px] font-normal text-[#737373]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
