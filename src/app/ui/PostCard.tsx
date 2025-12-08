'use client';

import Image from 'next/image';
import Link from 'next/link';

// Props 타입 정의 (Grid에서 넘겨줄 데이터 형태)
export interface PostProps {
  id: number;
  category: string;
  title: string;
  desc: string;
  tags: string[];
  date: string;
  readTime: string;
  thumbnail?: string; // 이미지는 있을 수도 없을 수도 있음
}

const PostCard = ({ post }: { post: PostProps }) => {
  return (
    <Link href={`/post/${post.id}`} className="block w-full">
      <article className="group flex h-[415px] w-full flex-col overflow-hidden rounded-[14px] border border-[#E5E5E5] bg-white transition-shadow hover:shadow-lg">
        {/* === 1. 썸네일 영역 (조건부 렌더링) === */}
        {post.thumbnail && (
          <div className="relative h-1/2 w-full overflow-hidden bg-gray-100">
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}

        {/* === 2. 텍스트 컨텐츠 영역 === */}
        {/* 썸네일이 있으면 h-1/2, 없으면 h-full로 꽉 채움 */}
        <div
          className={`flex flex-col justify-between p-6 ${post.thumbnail ? 'h-1/2' : 'h-full'}`}
        >
          <div className="space-y-3">
            {/* 카테고리 뱃지 (Tech 스타일 적용) */}
            <span className="inline-block rounded-[4px] bg-[#F3E8FF] px-2 py-1 font-arimo text-[14px] font-normal text-[#59168B]">
              {post.category}
            </span>

            {/* 제목 */}
            <h3 className="line-clamp-2 font-arimo text-[16px] font-normal text-[#171717]">
              {post.title}
            </h3>

            {/* 설명 (Description) */}
            <p className="line-clamp-3 font-arimo text-[16px] font-normal text-[#525252]">
              {post.desc}
            </p>
          </div>

          <div className="space-y-4">
            {/* 태그 리스트 */}
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex h-[21.23px] items-center justify-center rounded-[8px] border-[0.625px] border-solid border-gray-200 bg-[#F5F5F5] px-[8px] font-arimo text-[12px] font-normal text-[#525252]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* 날짜 및 소요시간 */}
            <div className="flex items-center gap-4 border-t border-gray-100 pt-4">
              {/* 날짜 */}
              <div className="flex items-center gap-2">
                <Image
                  src="/images/calander.svg"
                  alt="date"
                  width={16}
                  height={16}
                />
                <span className="font-arimo text-[14px] font-normal text-[#737373]">
                  {post.date}
                </span>
              </div>

              {/* 시간 */}
              <div className="flex items-center gap-2">
                <Image
                  src="/images/clock.svg"
                  alt="time"
                  width={16}
                  height={16}
                />
                <span className="font-arimo text-[14px] font-normal text-[#737373]">
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default PostCard;
