import StyledBanner, { Content, Main, List, Icon } from "./Banner.styled";

// importing necessary components
import Section from "../Section";
import SignUp from "../SignUp";

// importing svg icons
import { MeasureSVG } from "../../assets/svg/measure-svg";
import { HouseKeySVG } from "../../assets/svg/house-key-svg";
import { WarrantySVG } from "../../assets/svg/warranty-svg";

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
				</Main>

				<SignUp />
			</Content>
		</Section>
	</StyledBanner>
);

export default Banner;
