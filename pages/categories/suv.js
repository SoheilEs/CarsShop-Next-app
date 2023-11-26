import carsData from "../../data/carsData"
import CarsList from "../../components/CarsList"

const suv = () =>{
    const cars = carsData.filter(car => car.category === "suv")

    return <CarsList  car={cars} />
       
}
export default suv;