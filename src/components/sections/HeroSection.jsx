import { ArrowDown, ArrowUpRight } from 'lucide-react';

import bryan from '../../assets/img/Bryan/BryanImg.webp';
import bg from '../../assets/img/bg/background.webp';
import Brace from '../../assets/svg/Brace.svg';
import Divider from '../../assets/svg/Divider.svg';
import DividerDesktop from '../../assets/svg/DividerDesktop.svg';
import LineDev from '../../assets/svg/LineDev.svg';
import LineName from '../../assets/svg/LineName.svg';
import Button from '../Button';
import Header from '../Header';

const Hero = () => {
  return (
    <section className="relative h-dvh overflow-hidden">
      {/* HEADER DESKTOP*/}
      <div className="absolute top-12 z-40 hidden w-full justify-center px-8 lg:flex">
        <div className="w-full max-w-3xl">
          <Header />
        </div>
      </div>

      {/* TITLE MOBILE */}
      <div className="pointer-events-none absolute inset-0 z-20 mt-12 flex flex-col items-center justify-start space-y-6 text-center lg:hidden">
        <div className="pointer-events-auto flex flex-col items-center space-y-6">
          <h1 className="text-5xl font-bold text-portfolio-white">
            Álex Bryan
          </h1>
          <h3 className="text-xl font-bold text-portfolio-white">
            Developer Front-end <br /> Designer UX / UI
          </h3>
          <Button color="outlineWhite" size="sm">
            Ver Portfolio <ArrowUpRight size={18} />
          </Button>
        </div>
      </div>

      {/* TITLE DESKTOP */}
      <div className="pointer-events-none absolute inset-0 z-20 hidden lg:block">
        <div className="container mx-auto grid h-full max-w-7xl grid-cols-3 px-8 pb-32 pt-40">
          {/* Coluna 1: Nome */}
          <div className="flex h-full flex-col justify-center pb-72">
            <div className="pointer-events-auto flex items-end gap-2">
              <h1 className="text-5xl font-bold text-portfolio-white xl:text-6xl">
                Álex Bryan
              </h1>
              <img src={LineName} alt="" />
            </div>
          </div>

          <div className="h-full w-full"></div>

          {/* Coluna 3: Profissão */}
          <div className="flex h-full flex-col justify-end">
            <div className="pointer-events-auto flex justify-end">
              <img src={LineDev} alt="" className="mr-2 py-14" />
              <div className="flex flex-col items-end gap-2">
                <h3 className="text-right text-xl font-bold text-portfolio-white xl:text-2xl">
                  Developer Front-end <br /> Designer UX / UI
                </h3>
                <Button color="outlineWhite" size="sm">
                  Ver Portfolio <ArrowUpRight size={18} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brace Floating */}
      <img
        src={Brace}
        alt=""
        className="pointer-events-none absolute left-6 top-[56%] z-20 animate-floating-slow md:left-[20%] md:top-[56%] lg:top-[48%] xl:left-[28%] 2xl:w-10"
      />

      <div className="pointer-events-none absolute right-6 top-[40%] z-20 rotate-180 md:right-[20%] lg:top-[28%] xl:right-[28%]">
        <img src={Brace} alt="" className="animate-floating-slow 2xl:w-10" />
      </div>

      {/* Divider bottom */}
      <img
        src={Divider}
        alt=""
        className="pointer-events-none absolute -bottom-1 z-30 block w-full lg:hidden"
      />
      <img
        src={DividerDesktop}
        alt=""
        className="pointer-events-none absolute -bottom-4 z-30 hidden w-full lg:block xl:-bottom-6"
      />

      {/* message to Scroll */}
      <a href="#flags">
        <h3 className="pointer-events-auto absolute right-6 top-[60%] z-40 inline-flex cursor-pointer items-center gap-1 text-base font-bold text-portfolio-blueText lg:right-24 lg:top-[85%] xl:right-[20%]">
          Rolar
          <ArrowDown
            size={18}
            strokeWidth={2.5}
            className="text-portfolio-blueText"
          />
        </h3>
      </a>

      {/* Image person */}
      <div className="pointer-events-none absolute bottom-0 z-20 h-[65%] w-full lg:h-[80%]">
        <img
          src={bryan}
          alt="Foto de Álex Bryan"
          className="h-full w-full object-cover object-[30%_0%] md:object-contain md:object-[60%_0%] lg:object-center"
        />
      </div>

      {/* TextBig behind */}
      <h1 className="pointer-events-none absolute -bottom-32 -left-36 z-[1] select-none whitespace-nowrap text-[35rem] font-bold text-portfolio-white opacity-40 blur-md lg:-bottom-56 2xl:text-[32rem]">
        Álex Bryan
      </h1>

      {/* background */}
      <img
        src={bg}
        alt=""
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
      />
    </section>
  );
};

export default Hero;
