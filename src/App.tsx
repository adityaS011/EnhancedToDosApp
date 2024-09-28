import { useEffect, useState } from 'react';
import './App.css';
import ListOne from './components/ListOne';
import ListTwo from './components/ListTwo';
import Transfer from './components/Transfer';

export type List = {
  title: string;
  isSelected: boolean;
};

const App = () => {
  const [listOne, setListOne] = useState<List[]>(() =>
    JSON.parse(localStorage.getItem('listOne') || '[]')
  );
  const [listTwo, setListTwo] = useState<List[]>(() =>
    JSON.parse(localStorage.getItem('listTwo') || '[]')
  );

  useEffect(() => {
    localStorage.setItem('listOne', JSON.stringify(listOne));
  }, [listOne]);

  useEffect(() => {
    localStorage.setItem('listTwo', JSON.stringify(listTwo));
  }, [listTwo]);

  return (
    <div className='h-screen w-full flex flex-col items-center gap-10 mb-10'>
      <div className='hover:animate-bounce transition-transform'>
        <p className='mt-4 md:mt-10 p-4 bg-orange-300 uppercase text-3xl transition-all duration-500 ease-in-out text-purple-800 font-semibold shadow-lg rounded-xl transform hover:scale-110 hover:-rotate-3 hover:bg-purple-300'>
          Enhanced Todo List
        </p>
      </div>
      <div className='flex flex-col gap-6 md:gap-10 items-center h-full w-full mt-10'>
        <div className='flex flex-col md:flex-row gap-6 md:gap-16'>
          <ListOne listOne={listOne} setListOne={setListOne} />
          <ListTwo listTwo={listTwo} setListTwo={setListTwo} />
        </div>
        {(listOne.length > 0 || listTwo.length > 0) && (
          <Transfer
            listOne={listOne}
            setListOne={setListOne}
            listTwo={listTwo}
            setListTwo={setListTwo}
          />
        )}
      </div>
    </div>
  );
};

export default App;
