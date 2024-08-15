'use client';
import { SearchMenuFacturerProps } from '@/types'
import { Combobox , Transition } from '@headlessui/react'
import React from 'react'



const SearchMenuFacturer = ({manufacterer, setManufacterer}: SearchMenuFacturerProps) => {
  return (
    <div className='search0-menuFacturer'>
        <Combobox>
            <div className='relative w-full'>
                <combobox className="absolute top-[14px]"></combobox>
            </div>
        </Combobox>
    </div>
  )
}

export default SearchMenuFacturer