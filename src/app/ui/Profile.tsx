import Image from 'next/image';
import Link from 'next/link';

const Profile = () => {
  const stats = [
    { label: 'Posts', value: 24 },
    { label: 'Categories', value: 4 },
    { label: 'Projects', value: 12 },
  ];

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
      {/* [반응형 수정]
          1. h-[383px] -> h-auto md:h-[383px] (모바일은 높이 자동, PC는 고정)
          2. px-4 md:px-[139px]
          3. flex-col-reverse md:flex-row (모바일: 이미지 위, 텍스트 아래 / PC: 텍스트 왼, 이미지 오)
             혹은 그냥 flex-col (텍스트 위, 이미지 아래). 여기선 flex-col로 처리함.
          4. gap-8 md:gap-0 (모바일에서 요소 간 간격 추가)
          5. py-10 (모바일 위아래 여백 추가)
      */}
      <div className="mx-auto flex h-auto w-full max-w-[1430px] flex-col items-center justify-between gap-10 px-4 py-10 md:h-[383px] md:flex-row md:gap-0 md:px-[139px] md:py-0">
        {/* 1. 텍스트 컨텐츠 */}
        {/* 모바일: w-full, items-center(가운데 정렬) / PC: items-start */}
        <div className="flex h-auto w-full flex-col items-start justify-between gap-6 md:h-[252px] md:w-auto md:gap-0">
          <div className="flex flex-col items-start gap-4">
            <span className="inline-flex items-center justify-center rounded-full bg-[#F5F5F5] py-[5px] pl-[11.99px] pr-[14.33px]">
              <span className="font-arimo text-[14px] font-bold text-[#171717]">
                Frontend Developer
              </span>
            </span>

            <h1 className="font-arimo text-[24px] font-bold leading-[32px] text-[#171717] md:text-[16px] md:font-normal md:leading-[24px]">
              안녕하세요, 개발자 SJ입니다
            </h1>

            <p className="font-arimo max-w-[480px] text-[16px] font-normal leading-[24px] text-[#525252]">
              기술적 성장을 기록하고 공유하는 공간입니다. 알고리즘, 프로젝트
              경험, 새로운 기술 학습 과정을 카테고리별로 정리하여 개발자로서의
              여정을 문서화합니다.
            </p>
          </div>

          <div className="flex w-full flex-col gap-4 md:w-auto">
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

            <button className="inline-flex w-full items-center justify-center gap-[24px] rounded-[8px] border border-solid border-[#171717] bg-white py-[8px] pl-[12.61px] pr-[12.61px] hover:bg-gray-50 md:w-auto">
              <span className="font-arimo text-[14px] font-normal text-[#171717]">
                포트폴리오 보기
              </span>
              <Image
                src="/images/portfolio.svg"
                alt="arrow"
                width={16}
                height={16}
              />
            </button>
          </div>
        </div>

        {/* 2 & 3. 프로필 사진 + 통계 */}
        {/* 모바일: flex-col (세로), PC: flex-row (가로) */}
        <div className="flex w-full flex-col items-center gap-[32px] md:w-auto md:flex-row">
          <div className="relative h-[252px] w-[252px] shrink-0 overflow-hidden rounded-[20px] bg-gray-100">
            <Image
              src="/images/myprofile.png"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>

          {/* 통계: 모바일에서는 가로로 펼치거나 그대로 둠. 여기선 그대로 둠 */}
          <div className="flex w-full flex-row justify-around md:flex-col md:gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center md:items-end"
              >
                <span className="font-arimo text-[16px] font-normal text-[#171717]">
                  {stat.value}
                </span>
                <span className="font-arimo text-right text-[16px] font-normal text-[#737373]">
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
