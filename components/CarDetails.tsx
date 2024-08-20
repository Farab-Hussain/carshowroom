'use client'

import { Fragment } from 'react'
import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'
import { CarProps } from '@/types'
import { Dialog, Transition } from '@headlessui/react' 
import { relative } from 'path'
import { generateCarImageUrl } from '@/utils'


interface CarDetailsProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    closeModel: () => void;
    car: CarProps;
}

const CarDetails = ({isOpen,closeModel,car,setIsOpen}: CarDetailsProps ) => {
  return (
    <>
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={closeModel}>
        <Transition.Child 
        as={Fragment}
        enter='ease-out duration300'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='ease-in duration-200'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'>
          <div className='fixed inset-0 bg-black bg-opacity-25'></div>
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto '>
          <div className='flex min-h-full items-center justify-center p-4 text-center '>
          <Transition.Child 
        as={Fragment}
        enter='ease-out duration300'
        enterFrom='opacity-0 scale-90'
        enterTo='opacity-100 scale-100'
        leave='ease-in duration-200'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scscale-90'>
          <Dialog.Panel 
          as='div' 
          className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto
           transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5'>
            <button
             onClick={closeModel}
             type='button'
             className='absolute top-3 right-3 z-10 w-fit p-1 bg-primary-blue-100 rounded-full'>
              <Image
                src='/close.svg'
                alt='close'
                width={20}
                height={20}
                className='object-conatain' 
              />
            </button>
            <div className='flex-1 flex flex-col gap-3'>
              <div className='relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg'>
              <Image src={generateCarImageUrl(car,'angle')} alt='car model' fill priority className='object-contain' />
              </div>
              <div className='flex gap-3'>
                <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
              <Image src={generateCarImageUrl(car,'29')} alt='car model' fill priority className='object-contain' />
                </div>
                <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
              <Image src={generateCarImageUrl(car,'33')} alt='car model' fill priority className='object-contain' />
                </div>
                <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
              <Image src={generateCarImageUrl(car,'13')} alt='car model' fill priority className='object-contain' />
                </div>
              </div>
            </div>
            <div className='flex-1 flex flex-col gap-2'>
              <h2 className='text-xl font-semibold '>
                {car.make} {car.model}
              </h2>
              <div className='mt-3 flex flex-wrap gap-4'>
                {car && Object.entries(car).map(([key , value]) => (
                   <div className='flex justify-between gap-5 w-full text-right ' key={key}>
                    <h4 className='text-black-300 font-semibold capitalize'>{key.split('_').join(' ')}</h4>
                    <p className='text-black-100 font-medium'>{value}</p>
                   </div>
                ))}
              </div>
            </div>
          </Dialog.Panel>
        </Transition.Child>
          </div>
        </div>

      </Dialog>
    </Transition>
    </>
  )
}

export default CarDetails