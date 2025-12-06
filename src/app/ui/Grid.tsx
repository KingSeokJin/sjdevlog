import PostCard from './PostCard';

const Grid = () => {
  const dummyPosts = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `Post ${i + 1}`,
  }));

  return (
    <div className="mt-[25px] grid w-full grid-cols-2 justify-items-center gap-[25px]">
      {dummyPosts.map((post) => (
        <PostCard key={post.id} />
      ))}
    </div>
  );
};

export default Grid;
