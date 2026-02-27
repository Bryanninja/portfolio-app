import { useEffect } from 'react';

import { ArrowUpRight, X } from 'lucide-react';

import Button from './Button';

const MenuMobile = ({ isOpen, onClose }) => {
  // Efeito profissional para travar o scroll do corpo da página
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <section
      className={`fixed inset-0 z-50 flex h-dvh items-center justify-center bg-portfolio-blueText/90 backdrop-blur-md transition-all duration-300 ${isOpen ? 'pointer-events-auto opacity-100' : ' pointer-events-none opacity-0'}`}
    >
      {/* Close modal */}
      <button
        onClick={onClose}
        className="absolute right-6 top-6 text-portfolio-white transition-transform hover:scale-110"
        aria-label="Fechar menu"
      >
        <X size={48} />
      </button>

      {/* Links */}
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="cursor-pointer text-4xl text-portfolio-white transition-colors hover:text-portfolio-cyan">
          Portfolio
        </h1>
        <h1 className="cursor-pointer text-4xl text-portfolio-white transition-colors hover:text-portfolio-cyan">
          Sobre
        </h1>
        <Button color="outlineBlue" size="lg">
          Contato <ArrowUpRight size={32} className="text-portfolio-cyan" />
        </Button>
      </div>
    </section>
  );
};

export default MenuMobile;
