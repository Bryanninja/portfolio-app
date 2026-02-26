import { tv } from 'tailwind-variants';

const buttonStyles = tv({
  base: 'inline-flex items-center justify-center gap-1 transition-all',

  variants: {
    color: {
      primary:
        'bg-portfolio-cyan text-base rounded-lg font-semibold text-portfolio-white',
      outline:
        'bg-transparent rounded-lg border font-semibold border-portfolio-blueText text-portfolio-blueText',
      ghost:
        'rounded-full border bg-transparent border-portfolio-white hover:bg-portfolio-blue active:bg-portfolio-cyan text-portfolio-white backdrop-blur-md',
      ghostBlue:
        'rounded-full border bg-transparent border-portfolio-cyan hover:bg-portfolio-blue active:bg-portfolio-cyan text-portfolio-white ',
    },

    size: {
      sm: 'px-4 py-1 text-base',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-3 text-2xl',
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
  },
});

const Button = ({ children, color, size, className, ...props }) => {
  return (
    <button className={buttonStyles({ color, size, className })} {...props}>
      {children}
    </button>
  );
};

export default Button;
