import styles from "../styles/Filter.module.css"
import { useState } from "react"
import { useRouter } from "next/router"

const Filter = () => {
    const router = useRouter()
    const [minPrice,setMinPrice] = useState("")
    const [maxPrice,setMaxPrice] = useState("")
    const clickHandler = () =>{
        if(minPrice && maxPrice){
            router.push(`/filters/${minPrice}/${maxPrice}`)
        }else {
            alert("Please Enter Values to Search")
        }
        
    }

    console.log(minPrice, maxPrice)
    return(
        <div className={styles.container}>
            <div className={styles.inpContainer}>
                <input value={minPrice} onChange={e => setMinPrice(e.target.value)} placeholder="Please Enter min price..." />
                <input value={maxPrice} onChange={e => setMaxPrice(e.target.value)} placeholder="Please Enter max price..."  />
            </div>
            <button onClick={clickHandler}>Search</button>
        </div>
    );
}

export default Filter;