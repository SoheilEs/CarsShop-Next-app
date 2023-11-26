import carsData from "../../data/carsData"
import CarsList from "../../components/CarsList"

const sport = () =>{
    const cars = carsData.filter(car => car.category === "sport")

    return <CarsList  car={cars} />
       
}
export default sport;