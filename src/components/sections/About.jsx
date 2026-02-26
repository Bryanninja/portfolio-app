import Bryan from '../../assets/img/Bryan/BryanDevice2.webp';
import Figma from '../../assets/svg/Stacks/Figma.svg';
import Illustrator from '../../assets/svg/Stacks/Illustrator.svg';
import Java from '../../assets/svg/Stacks/Java.svg';
import Javascript from '../../assets/svg/Stacks/Javascript.svg';
import Photoshop from '../../assets/svg/Stacks/Photoshop.svg';
import React from '../../assets/svg/Stacks/React.svg';
import SpringBoot from '../../assets/svg/Stacks/SpringBoot.svg';
import Tailwindcss from '../../assets/svg/Stacks/Tailwindcss.svg';
import Button from '../../components/Button';

const Logos = [
  React,
  Tailwindcss,
  Javascript,
  Photoshop,
  SpringBoot,
  Java,
  Figma,
  Illustrator,
];

const About = () => {
  // lista para o efeito de loop infinito
  const duplicatedLogos = [...Logos, ...Logos];

  return (
    <section id="about" className="py-20">
      <div className="space-y-2 px-6">
        <h2 className="text-2xl font-bold text-portfolio-darkBlueText">
          Trajetória Técnica
        </h2>
        <h1 className="text-6xl font-bold text-portfolio-darkBlueText">
          E <span className="text-portfolio-lightBlue">Criativa</span>
        </h1>
      </div>

      <img
        src={Bryan}
        alt="Imagem do Álex Bryan"
        className="mt-10 h-full w-full object-cover"
      />

      {/* Container das Stacks com Máscara de Gradiente */}
      <div
        className="relative flex overflow-hidden bg-portfolio-blueText/10 py-6"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
        }}
      >
        <div className="animate-infinite-scroll flex w-max gap-12">
          {duplicatedLogos.map((Logo, index) => (
            <img
              src={Logo}
              key={index}
              className="w-32 object-contain" // Mantém a proporção e tamanho fixo
              alt="Tech Stack"
            />
          ))}
        </div>
      </div>

      <div className="mt-8 px-6">
        <p className="text-pretty text-lg text-portfolio-blueText">
          Unindo a lógica de sistemas ao design. Atualmente no 5º período de
          Análise e Desenvolvimento de Sistemas na faculdade Uniamérica
          Descomplica - Conclusão: Outubro de 2026.
          <br /> <br />
          Atuo como freelancer internacional desde janeiro de 2023,
          transformando desafios complexos em interfaces fluidas e códigos
          eficientes.
        </p>

        <div className="mt-8 flex justify-between gap-6">
          <Button className="w-full">Fale Comigo</Button>
          <Button className="w-full" color="outline">
            Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
