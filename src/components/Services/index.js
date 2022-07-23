import StyledServices, {
  Content,
  Title,
  Description,
  List,
  Prices,
} from "./Services.styled";

//importing necessary components
import Section from "../Section";

//importing images
import SimpleRoom from "../../assets/images/site/simple-room.jpg";
import EuroStyleRoom from "../../assets/images/site/euro-style-room.jpg";
import HiTechRoom from "../../assets/images/site/hi-tech-room.jpg";

const Services = () => {
  return (
    <StyledServices>
      <Section>
        <Content>
          <Title>Типы ремонта и их стоимость</Title>
          <Description>
            Стоимость работ указана за ВСЕ работы – как черновые, так и
            чистовые. Минимальная стоимость ремонта: 990000 руб. Оценка услуги
            является ориентировочной, финальная смета зависит от сложности работ
            и планировки помещения.
          </Description>

          <List>
            <li className="service">
              <img src={SimpleRoom} alt="" />
              <h3>Косметический ремонт</h3>

              <p>
                Работы с монтажом (заменой) инженерных сетей (электрики и
                сантехники), с выравниванием всех стен, полов и потолков.
              </p>

              <Prices>
                <h4>Стоимость</h4>

                <ul>
                  <li>
                    <p>Ремонтные работы (все)</p>
                    <p>
                      от <span className="strong">$200.00</span>
                    </p>
                  </li>

                  <li>
                    <p>Черновые материалы</p>
                    <p>
                      от <span className="strong">$175.00</span>
                    </p>
                  </li>

                  <li>
                    <p>Чистовые материалы</p>
                    <p>
                      <span className="strong">Договорная</span>
                    </p>
                  </li>
                </ul>
              </Prices>
            </li>

            <li className="service">
              <img src={EuroStyleRoom} alt="" />
              <h3>Европейский ремонт</h3>

              <p>
                Работы с монтажом (заменой) инженерных сетей (электрики и
                сантехники), с выравниванием всех стен, полов и потолков.
              </p>

              <Prices>
                <h4>Стоимость</h4>

                <ul>
                  <li>
                    <p>Ремонтные работы (все)</p>
                    <p>
                      от <span className="strong">$200.00</span>
                    </p>
                  </li>

                  <li>
                    <p>Черновые материалы</p>
                    <p>
                      от <span className="strong">$175.00</span>
                    </p>
                  </li>

                  <li>
                    <p>Чистовые материалы</p>
                    <p>
                      <span className="strong">Договорная</span>
                    </p>
                  </li>
                </ul>
              </Prices>
            </li>

            <li className="service">
              <img src={HiTechRoom} alt="" />
              <h3>Ремонт в стиле Hi-Tech</h3>

              <p>
                Работы с монтажом (заменой) инженерных сетей (электрики и
                сантехники), с выравниванием всех стен, полов и потолков.
              </p>

              <Prices>
                <h4>Стоимость</h4>

                <ul>
                  <li>
                    <p>Ремонтные работы (все)</p>
                    <p>
                      от <span className="strong">$200.00</span>
                    </p>
                  </li>

                  <li>
                    <p>Черновые материалы</p>
                    <p>
                      от <span className="strong">$175.00</span>
                    </p>
                  </li>

                  <li>
                    <p>Чистовые материалы</p>
                    <p>
                      <span className="strong">Договорная</span>
                    </p>
                  </li>
                </ul>
              </Prices>
            </li>
          </List>
        </Content>
      </Section>
    </StyledServices>
  );
};

export default Services;
