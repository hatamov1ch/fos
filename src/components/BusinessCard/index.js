import StyledBusinessCard, {
	CompanyName,
	Email,
	PhoneNumber,
	Address,
	Icon,
	Socials,
} from "./BusinessCard.styled";

// importing svg icons
import { CallMeSVG } from "../../assets/svg/call-me-svg";
import { MailSVG } from "../../assets/svg/mail-svg";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const BusinessCard = () => (
	<StyledBusinessCard>
		<header>
			<CompanyName>
				Future of <span>stroy</span>
			</CompanyName>

			<Email href="mailto:info@webpark.uz">
				<Icon>
					<MailSVG />
				</Icon>
				info@fos.uz
			</Email>
		</header>

		<Address>
			Республика Узбекистан, г. Ташкент, Юнусабадский р-н, Ц5, дом 46B/24,
			ориентир: Финансовый институт.
		</Address>

		<footer>
			<PhoneNumber href="tel:+998987074922">
				<Icon>
					<CallMeSVG />
				</Icon>
				+(998)98 707-49-22
			</PhoneNumber>

			<Socials>
				<a target="_blank" rel="noreferrer" href="https://google.com">
					<FaInstagram />
				</a>
				<a target="_blank" rel="noreferrer" href="https://google.com">
					<FaTelegram />
				</a>
				<a target="_blank" rel="noreferrer" href="https://google.com">
					<FaFacebook />
				</a>
			</Socials>
		</footer>
	</StyledBusinessCard>
);

export default BusinessCard;
