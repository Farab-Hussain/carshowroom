'use client'

import React from 'react';
import SearchMenuFacturer from './SearchMenuFacturer';
import Image from 'next/image';
import { useState } from 'react';
import { Input } from '@headlessui/react';

const SearchBar = () => {
  const SearchButton = ({otherClasses}:{otherClasses:string}) => {




    return ( // {{ edit_1 }}
      <button 
      type="submit"
      className={`-ml-10 z-10 ${otherClasses}`}>
        <Image 
         src='/magnifying-glass.svg'
         alt='magnifying glass'
         width={40}
         height={40}
         className='object-contain'
        />
      </button>
    ); 
  }



  const [manufacterer, setManufacterer] = useState('');
  const [model, setmodel] = useState('');
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(manufacterer === '' && model === '') {
      return alert('Please provide some input');
    }
    console.log(manufacterer, model);
  }

  const updateSearchParams = (model:string,  manufacterer:string) =>{
    // const seaarchParams = new
  }







  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchMenuFacturer
         manufacterer={manufacterer}
         setManufacterer={setManufacterer}
        />
        <SearchButton otherClasses='sm:hidden'/>
      </div>
      <div className="searchbar__item">
        <Image 
         src='/model-icon.png'
         width={25}
         height={25}
         alt='car model'
         className='absolute w-[20px] h-[20px] ml-4'
        />
        <Input 
         type='text'
         name='model'
         value={model}
         onChange={(e)=>setmodel(e.target.value)}
         placeholder='Tiguan'
         className='searchbar__input'
        />
        <SearchButton otherClasses='sm:hidden'/>
      </div>
        <SearchButton otherClasses='mx-sm:hidden'/>
    </form>
  )
}

export default SearchBar