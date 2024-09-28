import { useEffect, useState } from 'react';
import { List } from '../App';

const Transfer = ({
  listOne,
  setListOne,
  listTwo,
  setListTwo,
}: {
  listTwo: List[];
  setListTwo: (val: List[]) => void;
  listOne: List[];
  setListOne: (val: List[]) => void;
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const shiftSelectedContentToRight = () => {
    const seletecItem = listOne.filter((item) => item.isSelected === true);
    setListOne(listOne.filter((item) => item.isSelected === false));
    const newItem: List[] = seletecItem.map((item) => {
      return {
        ...item,
        isSelected: false,
      };
    });
    setListTwo([...listTwo, ...newItem]);
  };
  const deleteSelectedItems = () => {
    const updatedListOne = listOne.filter((item) => !item.isSelected); // Keep only unselected items
    const updatedListTwo = listTwo.filter((item) => !item.isSelected); // Keep only unselected items
    setListOne(updatedListOne);
    setListTwo(updatedListTwo);
  };
  const shiftSelectedContentToLeft = () => {
    const seletecItem = listTwo.filter((item) => item.isSelected === true);
    setListTwo(listTwo.filter((item) => item.isSelected === false));
    const newItem: List[] = seletecItem.map((item) => {
      return {
        ...item,
        isSelected: false,
      };
    });
    setListOne([...listOne, ...newItem]);
  };
  useEffect(() => {
    const isItemSelected =
      listOne.filter((item) => item.isSelected === true).length !== 0 ||
      listTwo.filter((item) => item.isSelected === true).length !== 0;

    setIsSelected(isItemSelected);
  }, [listOne, listTwo]);

  if (!isSelected) {
    return;
  }
  return (
    <div className='flex flex-row gap-3 md:gap-6'>
      <button
        onClick={shiftSelectedContentToRight}
        className='bg-green-400 p-2 rounded-lg md:w-24'
      >
        Done
      </button>
      <button
        onClick={shiftSelectedContentToLeft}
        className='bg-violet-500 p-2 rounded-lg md:w-24'
      >
        Not Done
      </button>
      <button
        onClick={deleteSelectedItems}
        className='bg-red-500 p-2 rounded-lg md:w-24'
      >
        Delete
      </button>
    </div>
  );
};

export default Transfer;
