import Header from './ui/Header';
import Navigation from './ui/Navigation';
import Profile from './ui/Profile';
import Grid from './ui/Grid';
import Footer from './ui/Footer';
export default function Home() {
  return (
    // 여기 className에 마우스를 올리고 테스트할 겁니다.
    <main className="flex min-h-screen flex-col items-center">
      <div className="flex w-[84%] flex-col items-center justify-center bg-blue-200 text-black">
        <Header />
        <Navigation />
        <Profile />
        <Grid />
        <Footer />
      </div>
    </main>
  );
}
