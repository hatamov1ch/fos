import StyledWatch, {
  Content,
  VideoContainer,
  Main,
  Icon,
} from "./Watch.styled";

//importing necessary components
import Section from "../Section";

//importing images
import VideoPoster from "../../assets/images/site/hi-tech-room.jpg";

//importing svg icons
import { PlaySVG } from "../../assets/svg/play-icon-svg";

const Watch = () => {
  return (
    <StyledWatch>
      <Section>
        <Content>
          <VideoContainer>
            <img src={VideoPoster} />
            <Icon>
              <PlaySVG />
            </Icon>
          </VideoContainer>

          <Main>
            <h2>Посмотрите видео нашей работы</h2>

            <p>
              Наши инструменты которые используем во время работы являются
              импортными и имеют высокого качества с соответствующими
              документами к ним.
            </p>
          </Main>
        </Content>
      </Section>
    </StyledWatch>
  );
};

export default Watch;
