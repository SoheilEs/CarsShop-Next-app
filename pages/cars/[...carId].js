import {useRouter} from "next/router"
import carsData from "../../data/carsData";
import styles from "../../styles/Car.module.css"
import Company from "../../components/icons/Company"
import Location from "../../components/icons/Location"
import Money from "../../components/icons/Money"
import Calender from "../../components/icons/Calender"
import Model from "../../components/icons/Model"
import Road from "../../components/icons/Road"
const Car = () =>{
    const id = useRouter().query.carId
    const car = carsData.find(item => item.id === +id )

    if(!car){
        return(
        <div className={styles.container}> 
            <h1>Loading...</h1>
        </div>
        );
    }
    const{
        name, 
        model,
        image, 
        price, 
        location,
        distance, 
        year, 
        category,
        description,
        } = car
   
    return(
        <div className={styles.container}>
            <div className={styles.detail}>
                <img  src={image}  alt={name} />
                <h3 className={styles.header}>{name} {model}</h3> 
                <div className={styles.info}>
                    <div>
                        <Company /> 
                        <p>Company</p>
                        <span>{name}</span>
                    </div>
                    <div>
                        <Model /> 
                        <p>Model</p>
                        <span>{model}</span>
                    </div>
                    <div>
                        <Calender /> 
                        <p>First registration</p>
                        <span>{year}</span>
                    </div>
                    <div>
                        <Road /> 
                        <p>Kms driven</p>
                        <span>{distance}</span>
                    </div>
                </div>  
                <div className={styles.info}>
                    <div>
                        <Location /> 
                        <p>Location</p>
                        <span>{location}</span>
                    </div>
                </div>  
                <div className={styles.info}>
                    <p className={styles.descriptionTitle}>Extra information :</p>
                    <p className={styles.descriptionText }>{description}</p>
                </div>
                <div className={styles.info}>
                   <div className={styles.price}>
                        <Money />
                        <p>Price :</p>
                        <span> $ {price}</span>
                   </div>
                </div>     
            <button className={styles.button}>Buy</button>
            </div>
        </div>
    );
}

export default Car ;