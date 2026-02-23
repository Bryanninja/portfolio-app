import { ArrowUpRight } from 'lucide-react';

import bryan from '../assets/img/Bryan/BryanImg.webp';
import bg from '../assets/img/bg/background.webp';

const HomePage = () => {
  return (
    <div className="container relative mx-auto">
      <div className="absolute inset-0 z-20 space-y-6 py-20 text-center">
        <h1 className="text-5xl font-bold text-white-portfolio">Álex Bryan</h1>
        <h3 className="text-xl font-bold text-white-portfolio">
          Developer Front-end <br /> Designer UX / UI
        </h3>
      </div>
      <img
        src={bryan}
        alt="Imagem Bryan"
        className="absolute bottom-0 z-10 h-[65%] w-full object-cover object-[30%]"
      />

      <h1 className="absolute -bottom-32 -left-36 text-[35rem] font-bold text-white-portfolio opacity-40 blur-md">
        Ál
      </h1>

      <img src={bg} alt="background" className="h-screen w-full object-fill" />
    </div>
  );
};

export default HomePage;
