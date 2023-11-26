import styles from "../styles/Card.module.css";
import Location from "./icons/Location"
import Link from "next/link";  

const Card = (props) => {
    const{id, name, model,image,price, location,distance, year} = props.car
    return(
        <Link href={`/cars/${id}`} >
            <div className={styles.card}>
                <img src={image} alt={name} />
                <h3>{name} {model}</h3>
                <p>{year} . {distance} km</p>
                <div className={styles.cardBtm}>
                    <p>$  {price}</p>
                    <div>
                        <span>{location}</span><Location />
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Card