import EUA from '../../assets/img/flags/EUA.webp';
import LinkSection from '../LinkSection';

const FlagsSection = () => {
  return (
    <section className="container mx-auto py-4">
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

      <div className="w-full pt-14">
        <img src={EUA} alt="" />
      </div>

      <div className="flex flex-col items-center justify-center space-y-8 px-6 py-8">
        <p className="text-portfolio-blueText">
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
