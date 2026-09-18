import type { CityType } from "../model/CityType";
import styles from "./CityItem.module.css";

export default function CityItem({ city }: CityItemProps) {
	const formatDate = (date: string) =>
		new Intl.DateTimeFormat("en", {
			day: "numeric",
			month: "long",
			year: "numeric",
		}).format(new Date(date));
	return (
		<li className={styles.cityItem}>
			<span className={styles.emoji}>{city.emoji}</span>
			<h3 className={styles.name}>{city.cityName}</h3>
			<time className={styles.date}>{formatDate(city.date)}</time>
			<button className={styles.deleteBtn}>&times;</button>
		</li>
	);
}

type CityItemProps = {
	city: CityType;
};
