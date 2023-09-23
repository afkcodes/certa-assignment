/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useReducer, useRef } from 'react';
import Button from '../components/Button';
import Count from '../components/Count';
import { counterReducer } from '../reducers/counterReducer';
import { CounterContainerProps } from '../types/component.types';

const CounterContainer: React.FC<CounterContainerProps> = ({
  initialValue = 0,
}) => {
  const [counter, dispatch] = useReducer(counterReducer, {
    count: initialValue,
    isRunning: false,
  });

  const counterIntervalRef = useRef(null) as any;

  const startCounter = () => {
    dispatch({ type: 'START' });
  };

  const pauseCounter = () => {
    dispatch({ type: 'PAUSE' });
    clearInterval(counterIntervalRef.current);
  };

  const resetCounter = () => {
    dispatch({ type: 'RESET' });
  };

  useEffect(() => {
    if (counter.isRunning) {
      counterIntervalRef.current = setInterval(() => {
        dispatch({ type: 'TICK' });
      }, 1000);
    } else {
      clearInterval(counterIntervalRef.current);
    }

    return () => {
      clearInterval(counterIntervalRef.current);
    };
  }, [counter.isRunning]);

  return (
    <div className='flex flex-col justify-center items-center gap-12'>
      <Count value={counter.count} />
      <div className='flex gap-4'>
        <Button text='START' onClick={startCounter} />
        <Button text='PAUSE' onClick={pauseCounter} />
        <Button text='RESET' onClick={resetCounter} />
      </div>
    </div>
  );
};

export default CounterContainer;
