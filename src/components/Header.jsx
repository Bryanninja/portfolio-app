import { ArrowUpRight } from 'lucide-react';

import Button from './Button';

const Header = ({ className = '' }) => {
  return (
    <header
      className={`rounded-full bg-portfolio-blueText/90 px-8 py-3 backdrop-blur-md ${className}`}
    >
      <div className="flex items-center justify-between">
        <h1 className="cursor-pointer text-xl font-semibold text-portfolio-white">
          Álex Bryan
        </h1>

        <div className="flex items-center gap-12">
          <nav>
            <ul className="flex items-center gap-12 text-base text-portfolio-white">
              <li className="cursor-pointer transition-colors hover:text-portfolio-cyan">
                Portfolio
              </li>
              <li className="cursor-pointer transition-colors hover:text-portfolio-cyan">
                Sobre
              </li>
            </ul>
          </nav>

          <Button color="ghostBlue" size="sm">
            Contato <ArrowUpRight size={20} className="text-portfolio-cyan" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
