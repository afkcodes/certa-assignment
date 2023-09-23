import React from 'react';
import { CountProps } from '../types/component.types';

const Count: React.FC<CountProps> = ({ value }) => {
  return <p className='text-2xl font-semibold'>{value}</p>;
};

export default Count;
