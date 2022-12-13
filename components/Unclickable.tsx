import React from 'react';

type Props = {};

const Unclickable = (props: Props) => {
  return (
    <>
      <div className="h-[62px] w-[258px] border border-transparent text-base font-medium rounded-[63.5417px] shadow-sm text-white bg-slate-400 cursor-not-allowed">
        <p className="w-full h-[33px] text-[15px] m-auto p-4 text-center">
          Please accept privacy policy{' '}
        </p>
      </div>{' '}
    </>
  );
};

export default Unclickable;
