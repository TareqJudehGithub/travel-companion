import { createContext, useContext } from "react";
import { useEffect, useState } from "react";
import type { CityType } from "../model/CityType";

const BASE_URL = "http://localhost:5000";
const CitiesContext = createContext<CitiesContextProps | undefined>(undefined);

function CitiesProvider({ children }: CitiesProviderProps) {
	const [cities, setCities] = useState<CityType[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(function () {
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
		fetchCities();
	}, []);

	return (
		<CitiesContext.Provider
			value={{
				cities,
				isLoading,
			}}
		>
			{children}
		</CitiesContext.Provider>
	);
}

function useCities(): CitiesContextProps {
	const context = useContext(CitiesContext);
	if (context === undefined)
		throw new Error("CitiesContext was used outside CitiesProvider");
	return context;
}

export { CitiesProvider, useCities };

type CitiesProviderProps = {
	children: React.ReactNode;
};

type CitiesContextProps = {
	cities: CityType[];
	isLoading: boolean;
};
