interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'fill';
  size?: 'sm' | 'md' | 'lg';
}

export default function Button({ children, variant = 'fill', size = 'md', className = '', ...rest }: ButtonProps & { className?: string }) {
  const btnType = {
    outline: 'bg-white color-text border border-psy-gray300 hover:bg-psy-gray100 cursor-pointer',
    fill: 'bg-psy-text100 text-white hover:bg-psy-text200 cursor-pointer',
  };

  const btnSize = {
    sm: 'py-1 px-3 text-12 rounded-lg min-w-12',
    md: 'py-2 px-4 text-14 rounded-2xl min-w-14',
    lg: 'py-2.5 px-5 text-16 rounded-3xl min-w-16',
  };

  return (
    <>
      <button className={`${btnType[variant]} ${btnSize[size]} ${className} transition-colors duration-200 font-sans`} {...rest}>
        {children}
      </button>
    </>
  );
}
