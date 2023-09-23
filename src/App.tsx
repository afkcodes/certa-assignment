import CounterContainer from './containers/CounterContainer';

function App() {
  return (
    <div className='flex flex-col bg-black text-white justify-center items-center h-screen'>
      <div>
        <h3 className='text-2xl font-bold'>Counter App</h3>
      </div>
      <div className='mt-12'>
        <CounterContainer initialValue={0} />
      </div>
    </div>
  );
}

export default App;
