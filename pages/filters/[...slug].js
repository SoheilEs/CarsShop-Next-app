import carsData from "../../data/carsData"
import { useRouter } from "next/router";
import CarsList from "../../components/CarsList"


const filters = () =>{
    const [min, max] = useRouter().query.slug || []

    const filterData = carsData.filter(item => item.price > min && item.price < max)
    console.log(filterData)
    if( !filterData.length ) return <h3>Not Found</h3>
    return (<CarsList car={filterData} />
    );
}
export default filters