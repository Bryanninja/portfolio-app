import { ArrowDown } from 'lucide-react';

import Button from './Button';

const LinkSection = ({ id, name }) => {
  return (
    <Button color="ghostLink" size="sm">
      <a
        href={id}
        className="inline-flex items-center gap-1 hover:text-portfolio-blue"
      >
        {name} <ArrowDown size={18} />
      </a>
      <div className="h-[2px] w-full bg-portfolio-blueText"></div>
    </Button>
  );
};

export default LinkSection;
