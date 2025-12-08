import PostCard, { PostProps } from './PostCard';

const Grid = () => {
  // 더미 데이터 생성 (이미지 유무 혼합)
  const dummyPosts: PostProps[] = [
    {
      id: 1,
      category: 'Tech',
      title: 'React 성능 최적화를 위한 메모이제이션 전략',
      desc: 'useMemo, useCallback, React.memo를 활용한 실전 성능 최적화 기법을 알아봅니다.',
      tags: ['React', 'Performance', 'Optimization'],
      date: '2024. 11. 5.',
      readTime: '8분',
      thumbnail: '/images/dummy_post1.svg',
    },
    {
      id: 2,
      category: 'Algorithm',
      title: '이진 탐색 트리 구현과 시간 복잡도 분석',
      desc: '이진 탐색 트리의 기본 개념부터 JavaScript로 직접 구현하고 성능을 분석합니다. 균형 트리와의 차이점도 알아봅니다.',
      tags: ['Data Structure', 'BST', 'JavaScript'],
      date: '2024. 11. 1.',
      readTime: '12분',
      // thumbnail 없음 -> 텍스트가 꽉 차게 나옴
    },
    {
      id: 3,
      category: 'Study',
      title: 'TypeScript 제네릭 완벽 가이드',
      desc: 'TypeScript의 강력한 기능인 제네릭을 실전 예제와 함께 마스터합니다. 유틸리티 타입 활용법까지 깊이 있게 다룹니다.',
      tags: ['TypeScript', 'Generics', 'Type System'],
      date: '2024. 10. 28.',
      readTime: '15분',
      thumbnail: '/images/dummy_post2.svg',
    },
    {
      id: 4,
      category: 'Project',
      title: '실시간 채팅 애플리케이션 개발기',
      desc: 'WebSocket과 React를 활용한 실전 채팅 앱 제작 과정을 공유합니다. 소켓 연결 관리와 상태 관리에 대한 노하우를 담았습니다.',
      tags: ['WebSocket', 'React', 'Real-time'],
      date: '2024. 10. 20.',
      readTime: '20분',
      thumbnail: '/images/dummy_post3.svg',
    },
  ];

  return (
    <section className="w-full bg-white pb-20">
      <div className="mx-auto grid w-full max-w-[1430px] grid-cols-2 gap-[25px] px-[139px]">
        {dummyPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default Grid;
