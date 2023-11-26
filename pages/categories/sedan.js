import carsData from "../../data/carsData"
import CarsList from "../../components/CarsList"

const sedan = () =>{
    const cars = carsData.filter(car => car.category === "sedan")

    return <CarsList  car={cars} />
       
}
export default sedan;