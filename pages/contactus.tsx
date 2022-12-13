import React from 'react';
import Form from '../components/Form';

type Props = {};

const contactus = (props: Props) => {
  return (
    <div className="md:px-[100px] md:py-[108px] p-[25px] ">
      <div className=" lg:flex lg:justify-between lg:flex-row flex flex-col w-full">
        <h1 className="md:text-[40px] text-[30px] mb-5 font-bold text-[#23262B] ">
          Interested? Let’s talk!
        </h1>
        <p className="lg:text-[20px] lg:w-[628px] w-auto break-normal font-normal leading-8 text-[#23262B] ">
          Just fill this simple form in and we will contact you promptly to
          discuss your project. Hate forms? Drop us a line at
          <span className="text-green-400 ml-1 underline decoration-1 cursor-pointer">
            hello@layouti.me
          </span>
        </p>
      </div>
      <div className=";g:mt-[145px] mt-[45px] flex">
        <div className="md:inline-flex h-[61px] items-center md:px-[59px] md:py-[13px] pt-4 pl-0 w-[218.58px] border border-transparent text-base font-medium rounded-[63.5417px] shadow-sm text-white bg-[#23262B] mr-[13px] ">
          <p className="w-full text-center">Work with us</p>
        </div>
        <div className="md:inline-flex h-[61px] items-center md:px-[59px] md:py-[13px] pt-4 pl-0 w-[218.58px] border border-transparent text-base font-medium rounded-[63.5417px] shadow-sm text-[#23262B] border-[#23262B] ml-[13px] ">
          <p className="w-full text-center">Say hello</p>
        </div>
      </div>
      <div className="my-[59px]">
        <Form />
      </div>
    </div>
  );
};

export default contactus;
