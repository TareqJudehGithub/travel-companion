import { Route, Routes } from "react-router";
import Product from "./pages/Product";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import CitiesList from "./components/CitiesList";
import { useEffect, useState } from "react";
import type { CityType } from "./model/CityType";

const BASE_URL = "http://localhost:5000";

function App() {
	const [cities, setCities] = useState<CityType[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(
		function () {
			async function fetchCities() {
				try {
					setIsLoading(true);
					const response = await fetch(`${BASE_URL}/cities`);
					const data = await response.json();
					setCities(data);
				} catch {
					alert("Error loading data");
				} finally {
					setIsLoading(false);
				}
			}
		},
		[cities],
	);

	return (
		<>
			<Routes>
				<Route index element={<Homepage />} />
				{/* <Route path="/" element={<Homepage />} /> */}
				<Route path="product" element={<Product />} />
				<Route path="pricing" element={<Pricing />} />
				<Route path="app" element={<AppLayout />}>
					<Route
						index
						element={<CitiesList cities={cities} isLoading={isLoading} />}
					/>
					<Route
						path="cities"
						element={<CitiesList cities={cities} isLoading={isLoading} />}
					/>
					<Route path="countries" element={<p>List of Countries</p>} />
					<Route path="form" element={<p>Form</p>} />
				</Route>
				<Route path="login" element={<Login />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</>
	);
}

export default App;
