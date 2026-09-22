import { useCities } from "../contexts/CitiesContext";
import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";

export default function CountriesList() {
	const { cities, isLoading } = useCities();
	if (!cities?.length) return <h3>No countries found</h3>;

	const countriesVisited: Country[] = [];

	cities.forEach((city) => {
		if (
			!countriesVisited.some((country) => country.country === city.country)
		) {
			countriesVisited.push({
				country: city.country,
				emoji: city.emoji,
			});
		}
	});

	return (
		<>
			{isLoading && <Spinner />}
			<ul className={styles.countryList}>
				{countriesVisited.map((country) => (
					<CountryItem key={country.country} country={country} />
				))}
			</ul>
		</>
	);
}

export type Country = {
	country: string;
	emoji: string;
};
