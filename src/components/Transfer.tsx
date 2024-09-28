import { ListType } from '../App';

const Transfer = ({
  listOne,
  setListOne,
  listTwo,
  setListTwo,
}: {
  listTwo: ListType[];
  setListTwo: (val: ListType[]) => void;
  listOne: ListType[];
  setListOne: (val: ListType[]) => void;
}) => {
  const shiftSelectedContent = (
    fromList: ListType[],
    setFromList: (val: ListType[]) => void,
    toList: ListType[],
    setToList: (val: ListType[]) => void
  ) => {
    const selectedItems = fromList.filter((item) => item.isSelected);
    if (selectedItems.length === 0) return;

    setFromList(fromList.filter((item) => !item.isSelected));
    setToList([
      ...toList,
      ...selectedItems.map((item) => ({ ...item, isSelected: false })),
    ]);
  };

  const deleteSelectedItems = () => {
    setListOne(listOne.filter((item) => !item.isSelected));
    setListTwo(listTwo.filter((item) => !item.isSelected));
  };

  const anyItemSelected =
    listOne.some((item) => item.isSelected) ||
    listTwo.some((item) => item.isSelected);

  if (!anyItemSelected) return null;

  return (
    <div className='flex flex-row gap-3 md:gap-6'>
      <button
        onClick={() =>
          shiftSelectedContent(listOne, setListOne, listTwo, setListTwo)
        }
        className='bg-green-400 p-2 rounded-lg md:w-24'
      >
        Done
      </button>
      <button
        onClick={() =>
          shiftSelectedContent(listTwo, setListTwo, listOne, setListOne)
        }
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
