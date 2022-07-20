import StyledBanner, {
	Content,
	Row,
	Main,
	List,
	Icon,
	ScrollBottom,
} from "./Banner.styled";

// importing necessary components
import Section from "../Section";
import SignUp from "../SignUp";
import BusinessCard from "../BusinessCard";

// importing svg icons
import { MeasureSVG } from "../../assets/svg/measure-svg";
import { HouseKeySVG } from "../../assets/svg/house-key-svg";
import { WarrantySVG } from "../../assets/svg/warranty-svg";
import { MouseSVG } from "../../assets/svg/mouse-svg";

const Banner = () => (
	<StyledBanner>
		<Section>
			<Content>
				<Main>
					<h1>
						Ремонт квартир
						<span>future of stroy</span>
					</h1>

					<p>
						Качественный, профессиональный ремонт квартир любой сложности.
						Создаем дизайнерские проекты на ремонт, весь спектр ремонтных
						работ в новостройках под ключ. Капитальный ремонт вторички.
						Отделочные материалы по оптовым ценам. Представляем отчет на
						каждом этапе работы. Не срываем сроки, гарантия качества.
						Работает профессиональная бригада мастеров. Оплата по факту
						работы.
					</p>

					<button>Проделанные работы</button>

					<Row>
						<List>
							<li>
								<Icon>
									<MeasureSVG />
								</Icon>
								Бесплатные замер
							</li>
							<li>
								<Icon>
									<HouseKeySVG />
								</Icon>
								Ремонт под ключ
							</li>
							<li>
								<Icon>
									<WarrantySVG />
								</Icon>
								Гарантия качества
							</li>
						</List>

						<BusinessCard />
					</Row>
				</Main>

				<SignUp />
			</Content>
		</Section>

		<ScrollBottom>
			<MouseSVG />
		</ScrollBottom>
	</StyledBanner>
);

export default Banner;
