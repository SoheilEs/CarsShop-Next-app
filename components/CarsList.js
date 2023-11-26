import styles from "../styles/CarsList.module.css"
import { useRouter } from "next/router";
import Back from "./icons/Back";
import Card from "./Card"
const CarsList = ({car}) => {
    const router = useRouter()
    const clickHandler = () =>{
        router.back()
    }
    return (
        <div className={styles.container}>
            <div className={styles.backBtn} onClick={clickHandler}>
                <Back />
                <p>Back</p>
            </div>
            <div className={styles.cards}>
                {car.map(item =>(
                    <Card car={item} /> 
                ))}
            </div>
        </div>
    );
}
export default CarsList;