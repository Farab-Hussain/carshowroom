import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import { fetchCars } from "@/utils";
import Image from "next/image";
import { CarCard } from "@/components";
import { CarProps } from "@/types"; 
import { fuels, manufacturers, yearsOfProduction } from "@/constants";



export default async function Home({ searchParams }: 
  { searchParams: { [key: string]: string } }) {
  
    const params = { // Define params here
    manufacturers: searchParams?.manufacturer || '',
    limit: Number(searchParams?.limit) || 2020, // Parse limit as a number
    model: searchParams?.model || '',
    year: Number(searchParams?.year) || undefined, // Change '' to undefined
    fuel: searchParams?.fuel || '',
  };
  const data: CarProps[] = await fetchCars({ // Pass params directly
    manufacturers: params.manufacturers,
    limit: params.limit,
    model: params.model,
    year: params.year || 0, // Ensure year is always a number
    fuel: params.fuel,
  });
  // console.log('Fetching cars with parameters:', params); // Log the parameters
  const allCars = data; 
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1; 

  return (
    <main className="overflow-hidden">
      <Hero/>
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            Car Catalogue
          </h1>
          <p>Explore the cars you might like</p>
          <div className="home__filters">
            <SearchBar/>
            <div className="home__filter-container">
              <CustomFilter title='fuel' options={fuels} />
              <CustomFilter title='year' options={yearsOfProduction} />
            </div>
          </div>
        </div>
      {!isDataEmpty ? (
        <section>
          <div className="home__cars-wrapper">
            {allCars?.map((car)=>(
              <CarCard car={car}/>
            ))}
          </div> 
        </section>
      ):(
        <div className="home__error-container ">
          <h2 className="text-black text-4xl font-bold">Oops no results</h2>
          <p>No cars found matching your criteria.</p>
        </div>
      )}

      </div>

    </main>
  );
}