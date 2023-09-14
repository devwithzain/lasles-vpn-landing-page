import Link from "next/link";
import { ButtonProps } from "@types";
const Button: React.FC<ButtonProps> = ({ title, href, className }) => {
	return (
		<Link href={href}>
			<button className={className}>{title}</button>
		</Link>
	);
};

export default Button;
