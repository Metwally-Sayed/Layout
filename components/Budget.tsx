import React, { useState } from 'react';
import { classNames } from '../functions';

type Props = {
  budgetValueHandle: (a: number) => void;
};

const Budget = ({ budgetValueHandle }: Props) => {
  const [budgets, setBudget] = useState([
    { id: 1, title: 'Less than $2k', current: false },
    { id: 2, title: '$2k - $5k', current: false },
    { id: 3, title: '$5 -10k', current: false },
    { id: 4, title: '$10 - 30k', current: false },
    { id: 5, title: 'More than $30k', current: false },
    { id: 6, title: 'Help me estimate', current: false },
  ]);

  const selectHandler = (title: string) => {
    const selected = budgets.map((budget) =>
      budget.title === title
        ? { ...budget, current: true }
        : { ...budget, current: false },
    );
    setBudget(selected);

    selected.map((item) => {
      if (item.current === true) {
        budgetValueHandle(item.id);
      }
    });
  };

  return (
    <>
      <div className="mb-[9px]">
        <p>
          Budget <span className="text-red-600"> *</span>
        </p>
      </div>
      <div className="flex flex-wrap lg:w-[60%] ">
        {budgets.map((budget, idx) => {
          return (
            <div
              onClick={() => selectHandler(budget.title)}
              key={idx}
              className={classNames(
                budget.current === true ? 'bg-[#42BF64] text-white' : '',
                'inline-flex h-[48px] my-3 items-center w-auto border border-transparent text-base font-medium rounded-[63.5417px] shadow-sm text-[#23262B] border-[#42BF64] ml-[13px] cursor-pointer ',
              )}
            >
              <p className="w-full capitalize text-[14px] font-semibold text-center py-[11px] px-[41px]">
                {budget.title}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Budget;
