import React from "react";
import { useFormik } from "formik";
// import emailjs from "emailjs-com";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormValues {
  surName: string;
  givenName: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  isChecked: boolean;
  amount?: string;
}

const Registration = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      surName: '',
      givenName: '',
      phoneNumber: '',
      email: '',
      companyName: '',
      isChecked: false,
      amount: ''
    },
    validationSchema: Yup.object({
      surName: Yup.string()
        .min(3, '3 аас их үсэгтэй байх ёстой')
        .required('Овог оруулна уу'),
      givenName: Yup.string()
        .min(3, '3 аас их үсэгтэй байх ёстой')
        .required('Нэр оруулна уу'),
      phoneNumber: Yup.string()
        .matches(/^\d{8,}$/, 'Хамгийн багадаа 8 оронтой байх ёстой')
        .required('Утасны дугаар оруулна уу'),
      email: Yup.string()
        .email('Цахим шуудан буруу')
        .required('Цахим шуудан оруулна уу'),
      amount: Yup.string()
        .matches(/^\d*$/, 'Зөвхөн тоо бичнэ үү')
        .required('Хэмжээ оруулна уу')
    }),
    onSubmit: async (values) => {
      try {
        await fetch('/api/submit', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        });
        toast('Амжилттай илгээгдлээ!', {
          position: 'bottom-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light'
        });
        formik.resetForm();
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  });
  return (
    <>
      <header className='text-[10px] text-center py-[8px]'>
        ГРАНД СИСТЕМС ХУВЬЦААНЫ УРЬДЧИЛСАН БҮРТГЭЛ
      </header>
      <form
        id='emailContent'
        onSubmit={(event) => {
          event.preventDefault();
          formik.handleSubmit();
        }}
        className='flex flex-col gap-[25px]'
      >
        <div className='flex flex-col mb-4'>
          <label htmlFor='name' className='text-[13px]'>
            Овог
          </label>
          <input
            id='name'
            name='surName'
            type='text'
            placeholder=''
            onChange={formik.handleChange}
            value={formik.values.surName}
            className='bg-gray-200 p-2 rounded'
          />
          {formik.touched.surName && formik.errors.surName ? (
            <div className='text-red-500 mt-16 absolute text-[13px]'>
              {formik.errors.surName}
            </div>
          ) : null}
        </div>

        <div className='flex flex-col mb-4'>
          <label htmlFor='name' className='text-[13px]'>
            Нэр
          </label>
          <input
            id='name'
            name='givenName'
            type='text'
            placeholder=''
            onChange={formik.handleChange}
            value={formik.values.givenName}
            className='bg-gray-200 p-2 rounded'
          />
          {formik.touched.givenName && formik.errors.givenName ? (
            <div className='text-red-500 mt-16 absolute text-[13px]'>
              {formik.errors.givenName}
            </div>
          ) : null}
        </div>

        <div className='flex flex-col mb-4'>
          <label htmlFor='mail' className='text-[13px]'>
            Цахим шуудан
          </label>
          <input
            id='mail'
            name='email'
            type='email'
            placeholder=''
            onChange={formik.handleChange}
            value={formik.values.email}
            className='bg-gray-200 p-2 rounded'
          />
          {formik.touched.email && formik.errors.email ? (
            <div className='text-red-500 mt-16 absolute text-[13px]'>
              {formik.errors.email}
            </div>
          ) : null}
        </div>

        <div className='flex flex-col mb-4'>
          <label htmlFor='phone' className='text-[13px]'>
            Утасны дугаар
          </label>
          <input
            id='phone'
            name='phoneNumber'
            type='text'
            pattern='[0-9]*'
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
            className='bg-gray-200 p-2 rounded'
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <div className='text-red-500 mt-16 absolute text-[13px]'>
              {formik.errors.phoneNumber}
            </div>
          ) : null}
        </div>

        <div className='mb-4 flex items-center  top-[60%]'>
          <input
            id='isChecked'
            name='isChecked'
            type='checkbox'
            onChange={formik.handleChange}
            checked={formik.values.isChecked}
          />
          <label htmlFor='isChecked' className='text-[13px] ml-[4px] '>
            Үнэт цаасны компанид данстай эсэх
          </label>
        </div>

        {formik.values.isChecked && (
          <div className='flex flex-col mb-4  top-[63%]'>
            <label htmlFor='company' className='text-[13px]'>
              Компанийн нэр
            </label>
            <input
              id='company'
              name='companyName'
              type='text'
              onChange={formik.handleChange}
              value={formik.values.companyName}
              className='bg-gray-200 p-2 rounded'
            />
          </div>
        )}

        <div className='flex flex-col mt-[35px]'>
          <label htmlFor='cost' className='text-[13px]'>
            Хөрөнгө оруулахаар сонирхож буй хэмжээ
          </label>
          <input
            id='cost'
            name='amount'
            type='text'
            pattern='[0-9]*'
            onChange={formik.handleChange}
            value={formik.values.amount}
            className='bg-gray-200 p-2 rounded'
          />
          {formik.touched.amount && formik.errors.amount ? (
            <div className='text-red-500 mt-16 absolute text-[13px]'>
              {formik.errors.amount}
            </div>
          ) : null}
        </div>

        <button
          type='submit'
          className='bg-blue-500 text-white font-bold py-2 px-4 rounded'
        >
          Илгээх
        </button>
      </form>
      <ToastContainer
        position='bottom-center'
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Registration;
