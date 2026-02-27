import Brazil from '../../assets/img/flags/Brazil.webp';
import Croatia from '../../assets/img/flags/Croatia.webp';
import EUA from '../../assets/img/flags/EUA.webp';
import Portugal from '../../assets/img/flags/Portugal.webp';
import SouthAfrica from '../../assets/img/flags/SouthAfrica.webp';
import LinkSection from '../LinkSection';

const FlagsSection = () => {
  const flags = [EUA, Croatia, SouthAfrica, Portugal, Brazil];

  return (
    <section id="flags" className="container overflow-hidden pt-4">
      <div className="space-y-6 px-6">
        {/* Title info */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[2.5rem] font-bold">Sem fronteiras</h1>
          <h1 className="text-4xl font-bold">
            Para A <span className="text-portfolio-lightBlue">Criação</span>
          </h1>
        </div>

        {/* Badge */}
        <div className="w-full rounded-2xl border border-portfolio-cyan bg-gradient-to-r from-portfolio-cyan/20 to-portfolio-darkBlue/20 py-3 text-center">
          <h3 className="text-base font-semibold text-portfolio-blue">
            +3 Anos No Mercado
          </h3>
        </div>
      </div>

      <div className="mt-12">
        <div className="scrollbar-hide flex snap-x snap-mandatory overflow-auto">
          {flags.map((flag, index) => (
            <div
              key={index}
              className="h-[380px] w-[80vw] flex-none snap-center overflow-hidden"
            >
              <img
                src={flag}
                alt="Projetos Internacionais"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center space-y-8 px-6">
        <p className="text-left text-base leading-relaxed text-portfolio-blueText">
          Colaborando com clientes e empresas em Orlando (EUA), Cidade do Cabo
          (África do Sul), Portugal e Croácia. Uma visão global, entregando
          projetos que se destacam em qualquer mercado.
        </p>

        <LinkSection id="#portfolio" name="Portfolio" />
      </div>
    </section>
  );
};

export default FlagsSection;
