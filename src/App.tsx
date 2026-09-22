import { Navigate, Route, Routes } from "react-router";
import Product from "./pages/Product";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import CitiesList from "./components/CitiesList";

import CountriesList from "./components/CountriesList";
import City from "./components/City";
import Form from "./components/Form";
import { CitiesProvider } from "./contexts/CitiesContext";

function App() {
	return (
		<CitiesProvider>
			<Routes>
				<Route index element={<Homepage />} />
				{/* <Route path="/" element={<Homepage />} /> */}
				<Route path="product" element={<Product />} />
				<Route path="pricing" element={<Pricing />} />
				<Route path="app" element={<AppLayout />}>
					<Route index element={<Navigate to="cities" replace />} />
					<Route path="cities" element={<CitiesList />} />
					<Route path="cities/:id" element={<City />} />
					<Route path="countries" element={<CountriesList />} />
					<Route path="form" element={<Form />} />
				</Route>
				<Route path="login" element={<Login />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</CitiesProvider>
	);
}

export default App;
