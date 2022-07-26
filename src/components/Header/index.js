import StyledHeader, { Content, Navigation, Link } from "./Header.styled";
import { useState } from "react";

// importing necessary components
import Section from "../Section";
import { Pivot as Hamburger } from "hamburger-react";

const Header = () => {
	const [isMobile, setIsMobile] = useState();

	const toggleMobile = () => setIsMobile((state) => !state);
	const disableMobile = () => setIsMobile((state) => (state = false));

	return (
		<StyledHeader>
			<Section>
				<Content>
					<Hamburger toggled={isMobile} toggle={toggleMobile} />

					<Navigation isMobile={isMobile}>
						<ul>
							<li onClick={disableMobile}>
								<Link>Главная</Link>
							</li>
							<li onClick={disableMobile}>
								<Link>Услуги</Link>
							</li>
							<li onClick={disableMobile}>
								<Link>Портфолио</Link>
							</li>
							<li onClick={disableMobile}>
								<Link>Контакты</Link>
							</li>
						</ul>
					</Navigation>
				</Content>
			</Section>
		</StyledHeader>
	);
};

export default Header;
