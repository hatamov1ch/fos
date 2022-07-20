import StyledBanner, { Content, Main, List, Icon, Form } from "./Banner.styled";

// importing necessary components
import Section from "../Section";

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

				<Form>
					<div>
						<label>Ваше полное имя</label>
						<input placeholder="Андрей Николаевич" />
					</div>

					<div>
						<label>Ваш номер телефона</label>
						<input placeholder="+99(899)900-43-34" />
					</div>

					<div>
						<label>Ваше сообщение</label>
						<textarea placeholder="Опишите подробности..." />
					</div>

					<input type="submit" value={"Отправить"} />

					<p>
						Нажатием данной кнопки вы соглашаетесь на обработку ваших
						персональных данных.
					</p>
				</Form>
			</Content>
		</Section>
	</StyledBanner>
);

export default Banner;
