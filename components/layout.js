import HeaderMenu from "../elements/header";
import FooterMenu from "../elements/footer";

export default function Layout({ children }) {
	return (
		<div id="root">
			<HeaderMenu />
			<main>{children}</main>
			<FooterMenu />
		</div>
	);
}