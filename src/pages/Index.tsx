import React from 'react';
import { Header } from '@/components/scout/Header';
import { SearchBox } from '@/components/scout/SearchBox';
import { PlayerCard } from '@/components/scout/PlayerCard';

const Index = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Poppins:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <main className="bg-white max-w-[393px] min-h-screen mx-auto my-0 max-sm:w-full">
        <Header />
        <section>
          <SearchBox />
          <div className="text-[#00b37a] text-base font-medium ml-6 mr-0 mt-5 mb-[15px]">
            20 Matches
          </div>
          <PlayerCard />
        </section>
      </main>
    </>
  );
};

export default Index;