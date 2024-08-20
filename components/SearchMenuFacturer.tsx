'use client';
import { SearchMenuFacturerProps } from '@/types'
import { Combobox , ComboboxInput, Transition } from '@headlessui/react'
import Image from 'next/image'
import React from 'react'
import { useState , Fragment } from 'react';
import { manufacturers } from '@/constants';



const SearchMenuFacturer = ({manufacterer, setManufacterer}: SearchMenuFacturerProps) => {
  const [query , setQuery] = useState('');
  const filteredManufacturers = 
  query === '' 
  ? manufacturers
  : manufacturers.filter((item) => 
    item.toLowerCase()
    .replace(/\s+/g, '')
    .includes(query.toLowerCase().replace(/\s+/g, ''))
  ); 
  return (
    <div className='search0-menuFacturer'>
        <Combobox value={manufacterer} onChange={setManufacterer}>
            <div className='relative w-full'>
                <Combobox.Button className="absolute top-[14px] left-5">
                  <Image src='/car-logo.svg' alt='car-logo' width={20} height={20} />
                </Combobox.Button>
                <Combobox.Input 
                className='search-manufacturer__input '
                placeholder='Volkswagen'
                displayValue={(manufacterer:string)=>manufacterer}
                onChange= {(e)=>setQuery(e.target.value)}
                />
                <Transition
                as={Fragment}
                leave='transition ease-in duration-100'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
                afterLeave={() => setQuery('')}
                >
                  <Combobox.Options>
                    {filteredManufacturers.length === 0 &&
                    query !== '' ?(
                      <Combobox.Option
                       value={query}
                       className='search-manufacturer__option'
                      >
                        Create '{query}'
                      </Combobox.Option>
                    ) : (
                      filteredManufacturers.map((item) => (
                        <Combobox.Option
                         key={item}
                         className={({ active }) => `relative search-manufacterer__option
                         ${active ? 'bg-primary-blue-100 text-white' : 'text-gray-900'}`}
                         value={item}
                        >
                          {({ selected, active})=>(
                            <>
                            <span 
                            className={`block truncate ${selected ? 'font-medium': 'font-normal'}`}>
                              {item}
                            </span>
                            {selected ? (
                              <span 
                              className={`absolute inset-y-0 left-0 flex items-center pl-3
                              ${active ? 'text-white' : 'text-primary-blue-500'}`}>
                                
                              </span>
                            ): null}
                            </>
                          )}
                        </Combobox.Option>
                      ))
                    )}
                  </Combobox.Options>
                  
                </Transition>
            </div>
        </Combobox>
    </div>
  )
}

export default SearchMenuFacturer