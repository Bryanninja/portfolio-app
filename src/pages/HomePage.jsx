import { ArrowUpRight } from 'lucide-react';

import bryan from '../assets/img/Bryan/BryanImg.webp';
import bg from '../assets/img/bg/background.webp';
import Button from '../components/Button';

const HomePage = () => {
  return (
    <div className="container relative mx-auto">
      <div className="absolute inset-0 z-20 space-y-6 py-20 text-center">
        <h1 className="text-portfolio-white text-5xl font-bold">Álex Bryan</h1>
        <h3 className="text-portfolio-white text-xl font-bold">
          Developer Front-end <br /> Designer UX / UI
        </h3>

        <Button color="ghost" size="sm">
          Ver Portfolio <ArrowUpRight />
        </Button>
      </div>

      {/* Image person */}
      <img
        src={bryan}
        alt="Imagem Bryan"
        className="absolute bottom-0 z-10 h-[65%] w-full object-cover object-[30%]"
      />

      {/* TextBig behind */}
      <h1 className="text-portfolio-white blur- absolute -bottom-32 -left-36 text-[35rem] font-bold opacity-40">
        Ál
      </h1>

      {/* background */}
      <img src={bg} alt="background" className="h-screen w-full object-fill" />
    </div>
  );
};

export default HomePage;
