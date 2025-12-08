import Header from './ui/Header';
import Navigation from './ui/Navigation';
import Profile from './ui/Profile';
import Grid from './ui/Grid';
import Footer from './ui/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <div className="flex w-full flex-col items-center justify-center text-black">
        <Header />
        <Navigation />
        <Profile />
        <Grid />
        <Footer />
      </div>
    </main>
  );
}
