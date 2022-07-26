import StyledWatch, {
  Content,
  VideoContainer,
  Main,
  Icon,
} from "./Watch.styled";

import { useState } from "react";

//importing necessary components
import Section from "../Section";
import Modal from "../Modal";

//importing images
import VideoPoster from "../../assets/images/site/hi-tech-room.jpg";

//importing videos
import ConstructionVideo from "../../assets/videos/construction.mp4";

//importing svg icons
import { PlaySVG } from "../../assets/svg/play-icon-svg";

const Watch = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <StyledWatch>
      <Section>
        <Content>
          <VideoContainer>
            <img src={VideoPoster} alt="Постер для видео" />
            <Icon onClick={handleOpenModal}>
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

      <Modal
        controller={{
          isOpen: isModalOpen,
          handleOpen: handleOpenModal,
          handleClose: handleCloseModal,
        }}
      >
        <video controls data-video-src="true">
          <source src={ConstructionVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Modal>
    </StyledWatch>
  );
};

export default Watch;
