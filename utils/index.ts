export async function fetchCars (){
    const headers ={
            'x-rapidapi-key': 'f9cf020710mshf7399c9f8106303p1f3758jsn447900669f7b',
            'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
        }
        const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?',{
            headers, // Corrected this line
        });
        const result = await response.json();
        return result;
}