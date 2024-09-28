import { useState } from 'react';
import { List } from '../App';
import CheckboxDemo from './CheckBox';

const ListTwo = ({
  listTwo,
  setListTwo,
}: {
  listTwo: List[];
  setListTwo: (val: List[]) => void;
}) => {
  const [inputText, setInputText] = useState(''); // Single state to manage input

  const addInList = () => {
    const trimmedText = inputText.trim();
    if (!trimmedText) return; // Prevent adding empty items

    const newList: List[] = [
      ...listTwo,
      { title: trimmedText, isSelected: false },
    ];
    setListTwo(newList);

    setInputText(''); // Clear input after adding item
  };

  const selectCurrentItem = (index: number) => {
    const updatedList: List[] = listTwo.map((item, idx) =>
      idx === index ? { ...item, isSelected: !item.isSelected } : item
    );

    setListTwo(updatedList);
  };

  return (
    <div className='border border-gray-400 gap-6 flex flex-col p-4 items-center bg-gray-100 opacity-80 rounded-lg shadow-slate-200 shadow-lg'>
      <h2>Done Task</h2>
      <ul className='flex flex-col gap-3 w-full'>
        {listTwo.length > 0 ? (
          listTwo.map((item, index) => (
            <li key={index}>
              <CheckboxDemo
                className='flex flex-row items-center gap-2'
                label={item.title}
                selectCurrentItem={() => selectCurrentItem(index)}
              />
            </li>
          ))
        ) : (
          <li className='text-gray-400'>No Item</li>
        )}
      </ul>
      <div className='flex flex-col gap-4 items-center'>
        <div className='h-[1px] w-full bg-gray-300'></div>
        <input
          className='p-2 w-full'
          type='text'
          placeholder='Enter Item'
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <div className='flex flex-row gap-4'>
          <button
            className='bg-green-500 text-black p-2 rounded-lg w-24'
            onClick={addInList}
          >
            Add In List
          </button>
          <button
            className='bg-red-500 text-black p-2 rounded-lg w-24'
            onClick={() => setListTwo([])}
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListTwo;
