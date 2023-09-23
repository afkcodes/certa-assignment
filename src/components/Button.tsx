import { ButtonProps } from '../types/component.types';

const Button: React.FC<ButtonProps> = ({ text = 'Click Me', onClick }) => {
  return (
    <button
      className='bg-teal-700 px-3 py-2 rounded-md active:bg-teal-600 transition-all duration-300 ease-in-out'
      onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
