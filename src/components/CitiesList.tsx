import { useCities } from "../contexts/CitiesContext";
import styles from "./CitiesList.module.css";
import CityItem from "./CityItem";
import Message from "./Message";
import Spinner from "./Spinner";

export default function CitiesList() {
	const { cities, isLoading } = useCities();

	if (cities.length === 0)
		return <Message message="Please add a city by clicking on the map." />;
	return (
		<>
			{isLoading && <Spinner />}
			<ul className={styles.cityList}>
				{cities?.map((city) => (
					<CityItem key={city.id} city={city} />
				))}
			</ul>
		</>
	);
}
