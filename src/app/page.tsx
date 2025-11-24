export default function Home() {
  return (
    // 여기 className에 마우스를 올리고 테스트할 겁니다.
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 p-24">
      <h1 className="text-5xl font-bold text-blue-500">
        TNT 스택 + Tailwind v3
      </h1>
      <p className="mt-4 text-xl text-gray-300">이제 자동완성이 잘 되나요?</p>
      {/* 테스트용: 아래 빈 따옴표 안에 커서를 두고 Ctrl + Space를 눌러보세요 */}
      <div className="text-red-300">test</div>
    </main>
  );
}
