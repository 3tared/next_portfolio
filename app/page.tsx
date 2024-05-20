import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="bg-black-100 relative flex justify-center items-center overflow-hidden flex-col mx-auto px-5 sm:px-10">
      <div className="max-w-7xl w-full">
        <Hero />
      </div>
    </main>
  );
}
