import { ArrowDown } from 'lucide-react';

const LinkSection = ({ id, name }) => {
  return (
    <div className="group flex flex-col items-center gap-1 transition-colors duration-300">
      <a
        href={id}
        className="inline-flex items-center gap-1 font-semibold text-portfolio-blueText group-hover:text-portfolio-blue group-active:text-portfolio-lightBlue"
      >
        {name} <ArrowDown size={18} />
      </a>
      {/* Linha decorativa */}
      <div className="h-[2px] w-full rounded-full bg-portfolio-blueText group-hover:bg-portfolio-blue group-active:bg-portfolio-lightBlue"></div>
    </div>
  );
};

export default LinkSection;
