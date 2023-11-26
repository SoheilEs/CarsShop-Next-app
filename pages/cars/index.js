import carsData from "../../data/carsData";
import Card from "../../components/Card"
import styles from "../../styles/Card.module.css";
import Category from "../../components/Category"
import Filter from "../../components/Filter"

const Cars = ()=>{
    
    return(
        <>
            <Filter />
            <Category />
            <div className={styles.container}>
                {carsData.map(car => <Card key={car.id} car={car} />)}
            </div>
        </>
    );
}
export default Cars;