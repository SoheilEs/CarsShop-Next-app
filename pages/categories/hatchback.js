import carsData from "../../data/carsData"
import CarsList from "../../components/CarsList"

const hatchback = () =>{
    const cars = carsData.filter(car => car.category === "hatchback")

    return <CarsList  car={cars} />
       
}
export default hatchback;