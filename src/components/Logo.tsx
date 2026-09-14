import { NavLink } from "react-router";

import styles from "./Logo.module.css";
import logo from "../../src/images/logo.png";
function Logo() {
	return (
		<NavLink to="/">
			<img src={logo} alt="WorldWise logo" className={styles.logo} />
		</NavLink>
	);
}

export default Logo;
