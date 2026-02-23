import { MenuIcon } from 'lucide-react';

const FAB = ({ className, ...props }) => {
  return (
    <button
      className={`bg-portfolio-white border-portfolio-cyan rounded-lg border p-2 transition-transform hover:scale-110 ${className} `}
      {...props}
    >
      <MenuIcon size={40} className="text-portfolio-cyan" />
    </button>
  );
};

export default FAB;
