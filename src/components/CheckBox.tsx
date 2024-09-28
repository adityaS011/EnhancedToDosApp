import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

const CheckboxDemo = ({
  label,
  selectCurrentItem,
  className,
}: {
  label: string;
  selectCurrentItem: () => void;
  className?: string;
}) => {
  const [checked, setChecked] = useState(false);

  return (
    <form>
      <div className={className}>
        <Checkbox.Root
          className={`w-[20px] h-[20px] flex items-center justify-center rounded-[4px] border border-gray-500 ${
            checked ? 'hover:bg-green-300' : 'hover:bg-violet-100'
          } focus:outline-none ${checked ? 'bg-green-500' : 'bg-white'}`}
          checked={checked}
          onCheckedChange={(val: boolean) => {
            setChecked(val);
            selectCurrentItem();
          }}
          id='c1'
        >
          <Checkbox.Indicator className='text-white'>
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label
          className='pl-[15px] text-[15px] leading-none text-gray-700'
          htmlFor='c1'
        >
          {label}
        </label>
      </div>
    </form>
  );
};

export default CheckboxDemo;
