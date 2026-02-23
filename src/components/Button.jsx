import { tv } from 'tailwind-variants';

const buttonStyles = tv({
  base: 'inline-flex items-center justify-center gap-1 transition-all',

  variants: {
    color: {
      primary:
        'bg-portfolio-cyan rounded-lg font-semibold text-portfolio-white',
      ghost:
        'rounded-full border border-portfolio-white px-4 py-1 text-portfolio-white backdrop-blur-md',
    },

    size: {
      sm: 'px-4 py-1 text-base',
      md: 'px-6 py-3 text-base',
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
