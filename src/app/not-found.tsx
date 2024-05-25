'use client';

/* eslint-disable react/no-unescaped-entities */

export default function NotFound() {
  return (
    <div className='mt-10 p-10'>
      <section className='bg-white '>
        <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
          <div className='mx-auto max-w-screen-sm text-center'>
            <h1 className='mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 '>
              404
            </h1>
            <p className='mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl '>
              Хуудас олдсонгүй
            </p>

            <a
              href='/'
              className='inline-flex cursor-pointer  bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4 border-2 border-rose-500 uppercase'
            >
              Эхлэл рүү буцах
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
