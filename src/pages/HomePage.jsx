import { useState } from 'react';

import FAB from '../components/FAB';
import MenuMobile from '../components/MenuMobile';
import Hero from '../components/sections/Hero';

const HomePage = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <main className="relative">
      <MenuMobile isOpen={openModal} onClose={() => setOpenModal(false)} />
      <Hero />
      <FAB
        onClick={() => setOpenModal(!openModal)}
        className="fixed bottom-6 right-6 z-40"
      />
    </main>
  );
};

export default HomePage;
