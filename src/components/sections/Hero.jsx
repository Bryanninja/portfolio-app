import { ArrowDown, ArrowUpRight } from 'lucide-react';

import bryan from '../../assets/img/Bryan/BryanImg.webp';
import bg from '../../assets/img/bg/background.webp';
import Brace from '../../assets/svg/Brace.svg';
import Divider from '../../assets/svg/Divider.svg';
import Button from '../../components/Button';

const Hero = () => {
  return (
    <section className="relative h-dvh overflow-hidden">
      {/* Header info */}
      <div className="absolute inset-0 z-20 flex flex-col items-center space-y-6 py-20 text-center">
        <h1 className="text-portfolio-white text-5xl font-bold">Álex Bryan</h1>
        <h3 className="text-portfolio-white text-xl font-bold">
          Developer Front-end <br /> Designer UX / UI
        </h3>

        <Button color="ghost" size="sm">
          Ver Portfolio <ArrowUpRight size={18} />
        </Button>
      </div>

      {/* Braces Floating */}
      <img src={Brace} alt="" className="absolute left-6 top-[60%]" />
      <img
        src={Brace}
        alt=""
        className="absolute right-6 top-[35%] rotate-180"
      />

      {/* message to Scroll */}
      <h3 className="text-portfolio-blueText absolute right-6 top-[60%] z-40 inline-flex cursor-pointer items-center gap-1 text-base font-bold">
        Rolar
        <ArrowDown
          size={18}
          strokeWidth={2.5}
          className="text-portfolio-blueText"
        />
      </h3>

      <img
        src={Divider}
        alt=""
        className="absolute -bottom-1 z-30 block w-full translate-y-[0.5px]"
      />

      {/* Image person */}
      <img
        src={bryan}
        alt="Foto de Álex Bryan"
        className="absolute bottom-0 z-10 h-[65%] w-full object-cover object-[30%]"
      />

      {/* TextBig behind */}
      <h1 className="text-portfolio-white absolute -bottom-32 -left-36 z-0 select-none text-[35rem] font-bold opacity-40 blur-md">
        Ál
      </h1>

      {/* background */}
      <img src={bg} alt="" className="h-screen w-full object-fill" />
    </section>
  );
};

export default Hero;
