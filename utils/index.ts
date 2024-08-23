import { CarProps, FilterProps } from "@/types";


export async function fetchCars(filter: FilterProps) {
    const {manufacturers, limit, model, year, fuel} = filter
    const headers = {
        'Content-Type': 'application/json',
        'x-rapidapi-key': 'f9cf020710mshf7399c9f8106303p1f3758jsn447900669f7b',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    };
    try {
        const queryString = new URLSearchParams().toString(); // Convert params to query string
        const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=
            ${filter.model}&year=${filter.year}&make=${filter.manufacturers}&limit=${filter.limit}`, {
            headers,
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`); // Error handling
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Fetch error:', error); // Log the error
        return []; // Return an empty array or handle as needed
    }
}
export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };
  
  export const updateSearchParams = (type: string, value: string) => {
    // Get the current URL search params
    const searchParams = new URLSearchParams(window.location.search);
  
    
    // Set the specified search parameter to the given value
    searchParams.set(type, value);
  
    // Set the specified search parameter to the given value
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  
    return newPathname;
  };



  export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL('https://cdn.imagin.studio/getimage');
    const {make, year,  model} = car;
    url.searchParams.append('customer', 'hrjavascript-mastery', );
    url.searchParams.append('make', make );
    url.searchParams.append('modelFamily', model.split(' ')[0] );
    url.searchParams.append('zoomType', 'fullscreen' );
    url.searchParams.append('modelYear', `${year}` );
    url.searchParams.append('angle', `${angle}` );

    return`${url}`
}

export const updateSearchParams = (type:string , value:string) =>{
    const seaarchParams = new URLSearchParams(window.location.search)

    seaarchParams.set(type, value)

   const newPathname = `${window.location.pathname}?${seaarchParams.toString()}`

   return newPathname;

}