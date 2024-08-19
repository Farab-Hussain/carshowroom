import {MouseEventHandler} from 'react'

export interface CustomButtonProps {
    title: string,
    containerStyles?:string,
    handleClick?:MouseEventHandler<HTMLButtonElement>;
    btnType?: 'button' | 'submit' | 'reset';
    textStyles?:string;
    rightIcon?:string;
    isDisabled?:boolean;
}

export interface SearchMenuFacturerProps {
    manufacterer: string;
    setManufacterer: (value: string) => void;
}
export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    "displacement": number,
    "drive": string,
    "fuel_type": string,
    "highway_mpg":number,
    "make": string,
    "model": string,
    "transmission": string,
    "year": number
}

export interface CarDetailsProps {
    isOpen: boolean;
    closeModel: () => void;
    car: CarProps;
    setIsOpen: (isOpen: boolean) => void;
}