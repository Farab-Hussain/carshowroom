"use client"; // Added to mark this component as a Client Component
import React from 'react'
import Image from 'next/image';
import { useState } from 'react';
import { CarProps } from '@/types';
import CustomButton from './CustomButton';
import CarDetails from './CarDetails';
import { calculateCarRent, generateCarImageUrl } from '@/utils';

interface CarCardProps {
    car: CarProps; // Changed from CarCardProps to CarProps
}

const CarCard = ({ car }: CarCardProps) => {
    const carRent = calculateCarRent(car.city_mpg, car.year);
    const
        { city_mpg,
            combination_mpg,
            cylinders,
            displacement,
            drive,
            fuel_type,
            highway_mpg,
            make,
            model,
            transmission,
            year
        } = car;

        const [isOpen, setIsOpen] = useState (false);

    return (
        <div className='car-card group'>
            <div className='car-card__content'>
                <h2 className='car-card__content-title'>
                    {make} {model}
                </h2>
            </div>
            <p className='flex mt-6 text-[32px] font-extrabold'>
                <span className='self-start text-[16px] font-semibold'>
                    $
                </span>
                {carRent}
                <span className='self-end text-[16px] font-medium'>
                    /day
                </span>
            </p>

            <div className='relative w-full h-40 my-3 object-contain'>
                <Image src={generateCarImageUrl(car)} alt='car model' fill priority className='object-contain' />
            </div>


            <div className='relative w-full flex mt-2'>
                <div className='flex group-hover:invisible w-full justify-between text-grey'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image src='/steering-wheel.svg' height={20} width={20} alt='Steering wheel' />
                        <p className='text-[14px]'>{transmission === 'a' ? 'Automatic' : 'Manual'}</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image src='/tire.svg' height={20} width={20} alt='tire' />
                        <p className='text-[14px]'>{drive.toUpperCase()}</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image src='/gas.svg' height={20} width={20} alt='gas' />
                        <p className='text-[14px]'>{city_mpg}MPG</p>
                    </div>
                </div>
                <div className='car-card__btn-container'>
                    <CustomButton
                        title="View More"
                        containerStyles='w-full py-[16px] rounded-full bg-primary-blue-100'
                        textStyles='text-white text-[14px]'
                        rightIcon='/right-arrow.svg'
                        handleClick={() => setIsOpen(true)} // Fixed syntax here
                    />
                </div>
            </div>

            <CarDetails
                isOpen={isOpen} 
                closeModel={() => setIsOpen(false)}
                car={car}
                setIsOpen={setIsOpen} // Pass the setIsOpen function
            />

        </div>
    )
}

export default CarCard;