import StyledFooter, {
  Content,
  Navigation,
  Links,
  Contacts,
  Email,
  Company,
  Socials,
} from "./Footer.styled";

//importing necessary components
import Section from "../Section";

//importing svg icons
import { CallMeSVG } from "../../assets/svg/call-me-svg";
import { MailSVG } from "../../assets/svg/mail-svg";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => (
  <StyledFooter>
    <Section>
      <Content className="content-1">
        <Contacts>
          <h3>Контакты</h3>

          <address>
            Республика Узбекистан, г. Ташкент, Юнусабадский р-н, Ц5, дом 46B/24,
            ориентир: Финансовый институт.
          </address>

          <div className="phones">
            <div className="phones__item">
              <CallMeSVG />
              <a href="tel:+998994395221">+(998)98 707-49-22</a>
            </div>

            <div className="phones__item">
              <CallMeSVG />
              <a href="tel:+998994395221">+(998)98 707-49-22</a>
            </div>
          </div>

          <Email>
            <MailSVG />

            <a href="mailto:consult@future-of-stroy.uz">
              consult@future-of-stroy.uz
            </a>
          </Email>
        </Contacts>

        <Navigation>
          <h3>Меню сайта</h3>

          <Links>
            <span>Главная</span>
            <span>Услуги</span>
            <span>Портфолио</span>
            <span>Контакты</span>
          </Links>
        </Navigation>

        <Company>
          <h3>Future Of Stroy</h3>

          <p>
            Future Of Stroy - это команда профессионалов, которые занимаются
            евро-ремонтом квартир, офисов, и домов в Узбекистане.
          </p>

          <Socials>
            <a target="_blank" rel="noreferrer" href="https://t.me/webpark_uz">
              <FaInstagram />
            </a>

            <a target="_blank" rel="noreferrer" href="https://t.me/webpark_uz">
              <FaTelegram />
            </a>

            <a target="_blank" rel="noreferrer" href="https://t.me/webpark_uz">
              <FaFacebook />
            </a>
          </Socials>
        </Company>
      </Content>
    </Section>

    <Section>
      <Content className="content-2">
        <p className="copy">
          &copy; Future Of Stroy - {new Date().getFullYear()} | все права
          защищены.
        </p>

        <div className="'developed-by">
          <p>
            Разработан -{" "}
            <a
              rel="noreferrer"
              target="_blank"
              href="https://webpark.uz"
              className="dev-website"
            >
              webpark.uz
            </a>
          </p>
        </div>
      </Content>
    </Section>
  </StyledFooter>
);

export default Footer;