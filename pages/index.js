import carsData from "../data/carsData";
import Card from "../components/Card"
import styles from "../styles/Card.module.css";
import Category from "../components/Category"
import Filter from "../components/Filter"
import AllButton from "../components/AllButton"

export default function Home() {
  const cars = carsData.slice(0,3)

  return (
    <>
            <Filter />
            <Category />
            <AllButton />
            <div className={styles.container}>
                {cars.map(car => <Card key={car.id} car={car} />)}
            </div>
    </>
  )
}
