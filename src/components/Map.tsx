import { useNavigate, useSearchParams } from "react-router";
import styles from "./Map.module.css";

export default function Map() {
	const [searchParams, setSearchParams] = useSearchParams();
	const navigate = useNavigate();

	const lat = searchParams.get("lat");
	const lng = searchParams.get("lng");

	return (
		<div className={styles.mapContainer} onClick={() => navigate("form")}>
			<h1>Map</h1>
			<h3>
				Position: {lat}, {lng}
			</h3>
			<button
				onClick={() => {
					setSearchParams({ lat: 23, lng: 50 });
				}}
			>
				Location
			</button>
		</div>
	);
}
