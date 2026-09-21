import styles from "./Button.module.css";

export default function Button({
	children,
	onClick,
	buttonType: type,
}: ButtonProps) {
	return (
		<button className={`${styles.btn} ${styles[type]}`} onClick={onClick}>
			{children}
		</button>
	);
}

type ButtonVariant = "primary" | "back" | "position";
type ButtonProps = {
	children: React.ReactNode;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
	buttonType: ButtonVariant;
};
