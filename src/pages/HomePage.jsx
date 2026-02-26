import { useState } from 'react';

import FAB from '../components/FAB';
import MenuMobile from '../components/MenuMobile';
import About from '../components/sections/About';
import FlagsSection from '../components/sections/FlagsSection';
import HeroSection from '../components/sections/HeroSection';

const HomePage = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <main className="relative">
      <MenuMobile isOpen={openModal} onClose={() => setOpenModal(false)} />
      <FAB
        onClick={() => setOpenModal(!openModal)}
        className="fixed bottom-6 right-6 z-40"
      />
      <HeroSection />
      <FlagsSection />
      <About />
    </main>
  );
};

export default HomePage;
