/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import Budget from './Budget';
import Freelancers from './Freelancers';
import logo from '../images/arrow.svg';
import Image from 'next/image';
import { useFormik } from 'formik';
import { validationSchema } from '../validationSchema';
import Unclickable from './Unclickable';
import { sendDataHandler } from '../functions';

let serviceValue: number[];
let budgetValue: number = 0;

const serviceValueHandler = (value: number[]) => {
  serviceValue = value;
};

const budgetValueHandle = (value: number) => {
  budgetValue = value;
};

const Form = () => {
  const [serviceValidation, setServiceValidation] = useState(true);
  const [budgetValidation, setbudgetValidation] = useState(true);
  const [checked, setChecked] = useState(false);

  const checkHandler = () => {
    setChecked(!checked);
  };

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      details: '',
      attachment: '',
    },
    validationSchema,
    onSubmit: (values, actions) => {
      console.log(values);

      serviceValue.length === 0
        ? setServiceValidation(false)
        : setServiceValidation(true);

      budgetValue === 0
        ? setbudgetValidation(false)
        : setbudgetValidation(true);
      const dataForm = { ...values, need: serviceValue, budget: budgetValue };
      sendDataHandler(dataForm);
    },
  });

  return (
    <>
      <form className="flex w-full flex-col">
        <div className="flex lg:flex-row flex-col">
          <div className="flex flex-col lg:mr-3 mr-0">
            <label className="mb-2" htmlFor="">
              Full name<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.fullName && formik.touched.fullName
                  ? 'border-red-600 bg-red-200 mb-3 border border-transparent h-[61px] md:w-[426px] w-[220] py-[15px] pl-[30px] rounded-full'
                  : 'border-[#CDD0DB] mb-3 border border-transparent h-[61px] md:w-[426px] w-[220] py-[15px] pl-[30px] rounded-full'
              }
              placeholder="e.g. Yaser Nazzal"
            />
            {formik.errors.fullName && formik.touched.fullName && (
              <p className="text-red-500 text-xs p-0 m-0">
                {formik.errors.fullName}
              </p>
            )}
          </div>
          <div className="flex flex-col lg:ml-3 ">
            <label className="mb-2" htmlFor="">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.email && formik.touched.email
                  ? 'border-red-600 bg-red-200 mb-3 border border-transparent h-[61px] md:w-[426px] w-[220] py-[15px] pl-[30px] rounded-full'
                  : 'border-[#CDD0DB] mb-3 border border-transparent h-[61px] md:w-[426px] w-[220] py-[15px] pl-[30px] rounded-full'
              }
              placeholder="e.g. hello@layouti.me
            "
            />
            {formik.errors.email && formik.touched.email && (
              <p className="text-red-500 text-xs p-0 m-0">
                {formik.errors.email}
              </p>
            )}
          </div>
        </div>
        <div className="mt-[54px]">
          <Freelancers serviceValueHandle={serviceValueHandler} />
          {serviceValidation === true ? null : (
            <p className="text-red-500 text-xs p-0 m-0">
              Please select a service
            </p>
          )}
        </div>
        <div className="mt-[39px] mb-[10px] flex flex-col">
          <label className="font-normal text-[20px] h-[37px]">
            Project details <span className="text-red-600"> *</span>
          </label>
          <textarea
            id="details"
            value={formik.values.details}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.errors.details && formik.touched.details
                ? ' px-[30px] py-[15px] bg-red-200 border-red-600 border border-transparent h-[244px] lg:w-[872px] md:w-[560px]  rounded-[30px]'
                : ' px-[30px] py-[15px] border-[#CDD0DB] border border-transparent h-[244px] lg:w-[872px] md:w-[560px]  rounded-[30px]'
            }
            placeholder="e.g. Yaser Nazzal"
            rows={4}
          />
          {formik.errors.details && formik.touched.details && (
            <p className="text-red-500 text-xs p-0 m-0">
              {formik.errors.details}
            </p>
          )}
        </div>
        <div className="mt-[39px] mb-[10px] flex flex-col">
          <label className="font-normal text-[20px] h-[37px]">
            Attachment <span className="text-red-600"> *</span>
          </label>
          <input
            id="attachment"
            // value={formik.values.attachment}
            onChange={(e) => {
              console.log(e.currentTarget.files![0]);
              return formik.setFieldValue(
                'attachment',
                e.currentTarget.files![0],
              );
            }}
            onBlur={formik.handleBlur}
            className={
              formik.errors.attachment && formik.touched.attachment
                ? ' px-[30px] py-[15px]  bg-red-200 border-red-600 border border-transparent h-[61px] lg:w-[872px] md:w-[560px] rounded-[30px]'
                : ' px-[30px] py-[15px] border-[#CDD0DB] border border-transparent h-[61px] lg:w-[872px] md:w-[560px] rounded-[30px]'
            }
            placeholder="Attachment here"
            type="file"
            name="attachment"
            accept=".pdf,.doc,.docx"
          />
          {formik.errors.attachment && formik.touched.attachment && (
            <p className="text-red-500 text-xs p-0 m-0">
              {formik.errors.attachment}
            </p>
          )}
          <p className="mt-[10px] text-[#B1B6C9]">
            Only PDF and Doc. with max. size of 10MB
          </p>
        </div>
        <div className="mt-[54px]">
          <Budget budgetValueHandle={budgetValueHandle} />
          {budgetValidation ? null : (
            <p className="text-red-500 text-xs p-0 m-0">
              Please select a budget
            </p>
          )}
        </div>
        <div className="mt-[40px]">
          <input
            onClick={checkHandler}
            className="h-[61px] w-[61px] rounded-[15px] border-gray-300 text-[#42BF64] focus:ring-[#42bf6300] mr-[30px]"
            type="checkbox"
          />
          <label htmlFor="test">
            I accept your
            <span className="text-green-400 ml-1 underline decoration-1 cursor-pointer">
              {' '}
              Privacy Policy
            </span>
            <span className="text-red-600"> *</span>
          </label>
        </div>
        <div className="mt-[40px]">
          {!checked ? (
            <Unclickable />
          ) : (
            <button
              type="button"
              onClick={() => formik.handleSubmit()}
              className="h-[62px] px-[30px] py-[13px] w-[258px] border border-transparent text-base font-medium rounded-[63.5417px] shadow-sm text-white bg-[#42BF64]"
            >
              <div className="flex w-full justify-between">
                <span className="w-[150px] h-[33px] leading-8 text-[17px]">
                  Send request
                </span>
                <Image src={logo} alt={'arrow'} />
              </div>
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default Form;
