import StyledAbout, {
  Content,
  Row,
  List,
  ImageWrapper,
  Main,
  CompanyName,
} from "./About.styled";

//importing necessary components
import Section from "../Section";
import { LinkButton } from "../../global.styled";

//importing images
import LuxuryHiTechRoom from "../../assets/images/site/luxury-hi-tech-room.jpg";

const About = () => {
  return (
    <StyledAbout>
      <Section>
        <Content>
          <Row>
            <List>
              <li>
                <h3>15 лет опыта</h3>
                <p>
                  Согласитесь что сложно найти профессионалов у которых есть
                  опыт в соответствующей индустрии, что вызывает больше доверия
                  и надежности.
                </p>
              </li>
              <li>
                <h3>Оплата по факту выполненных работ</h3>
                <p>
                  Никаких предоплат и лишних затрат, вы оплачиваете только
                  тогда, когда мы закончим работу и вы будете довольны.
                </p>
              </li>
              <li>
                <h3>Импортные инструменты</h3>
                <p>
                  Наши инструменты которые используем во время работы являются
                  импортными и имеют высокого качества с соответствующими
                  документами к ним.
                </p>
              </li>
            </List>

            <ImageWrapper>
              <img src={LuxuryHiTechRoom} alt="Hi-Tech интерьер" />
            </ImageWrapper>

            <Main>
              <h2>О компании</h2>
              <p>
                <CompanyName>future of stroy</CompanyName> - это команда молодых
                профессионалов, которые занимаются евро-ремонтом квартир,
                офисов, и домов в Узбекистане. наша компания была основана в
                2021 году и успешно показала себя на рынке среди конкурентов.
                Для нас очень важно чтобы клиенты были довольны нашей работой.
              </p>

              <LinkButton role="button">Читать больше</LinkButton>
            </Main>
          </Row>
        </Content>
      </Section>
    </StyledAbout>
  );
};

export default About;
