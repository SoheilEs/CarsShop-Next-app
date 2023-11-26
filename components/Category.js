import styles from "../styles/Category.module.css";
import Suv from "./icons/Suv";
import Sedan from "./icons/Sedan";
import Sport from "./icons/Sport";
import Hatchback from "./icons/Hatchback";
import { useRouter } from "next/router"

const Category = () => {
    const router = useRouter()
    const clickHandler = (value) => {
        router.push(`/categories/${value}`)
    }
    return(
        <div className={styles.container}>
          <div onClick={()=>clickHandler("sedan")}>
            <p>Sedan</p>
            <Sedan />
          </div>
          <div onClick={()=>clickHandler("suv")}>
            <p>Suv</p>
            <Suv />
          </div>
          <div onClick={()=>clickHandler("sport")}>
            <p>Sport</p>
            <Sport />
          </div>
          <div onClick={()=>clickHandler("hatchback")}>
            <p>Hatchback</p>
            <Hatchback />
          </div>
        </div>
    );
}
export default Category;
