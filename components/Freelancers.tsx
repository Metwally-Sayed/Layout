import React, { useState } from 'react';
import { classNames } from '../functions';

type Props = {
  serviceValueHandle: (a: number[]) => void;
};

const Freelancers = ({ serviceValueHandle }: Props) => {
  const [jobs, setJobs] = useState([
    { id: 1, title: 'copywriter', current: false },
    { id: 2, title: 'app development', current: false },
    { id: 3, title: 'backend development', current: false },
    { id: 4, title: 'frontend development', current: false },
    { id: 5, title: 'web app designer', current: false },
    { id: 6, title: 'app designer', current: false },
    { id: 7, title: 'website designer', current: false },
    { id: 8, title: 'branding', current: false },
  ]);

  const selectHandler = (title: string) => {
    let selectedFreelancers: number[] = [];

    jobs.map((job) => {
      if (job.title! === title) {
        selectedFreelancers = [...selectedFreelancers, job.id];
        setJobs([{ ...job, current: true }]);
      }
    });
    serviceValueHandle(selectedFreelancers);

  };

  return (
    <>
      <div className="mb-[9px]">
        <p>
          I need <span className="text-red-600"> *</span>
        </p>
      </div>
      <div className="flex flex-wrap-reverse lg:w-[60%]">
        {jobs.map((job, idx) => {
          return (
            <div
              onClick={() => selectHandler(job.title)}
              key={idx}
              className={classNames(
                job.current === true ? 'bg-[#42BF64] text-white' : '',
                'inline-flex h-[48px] my-3 items-center w-auto border border-transparent text-base font-medium rounded-[63.5417px] shadow-sm text-[#23262B] border-[#42BF64] ml-[13px] cursor-pointer ',
              )}
            >
              <p className="w-full capitalize text-[14px] font-semibold text-center py-[11px] px-[41px]">
                {job.title}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Freelancers;
