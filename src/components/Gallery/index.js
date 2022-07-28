import StyledGallery, { Content, Images, ImageWrapper } from "./Gallery.styled";
import { useState } from "react";
//importing necessary components
import Section from "../Section";

//Lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const Gallery = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(-1);

  const renderImages = (images) => {
    if (!images || images.length <= 0) {
      console.error("No data to render.");
      return null;
    }

    return images.map(({ id, src }, index) => (
      <ImageWrapper
        onClick={() => setCurrentImageIndex(index)}
        key={`image-${id}`}
      >
        <img src={src} alt={`image-${id}`} />
      </ImageWrapper>
    ));
  };

  return (
    <StyledGallery>
      <Section>
        <Content>
          <h2>Фотография наших работ</h2>

          <p>
            Профессионалов, которые занимаются евро-ремонтом квартир, офисов, и
            домов в Узбекистане. наша компания была основана в 2021 году и
            успешно показала себя на рынке среди конкурентов. Для нас очень
            важно чтобы клиенты были довольны нашей работой.это команда молодых
          </p>

          <Images>{renderImages(images)}</Images>
        </Content>
      </Section>

      <Lightbox
        open={currentImageIndex >= 0}
        close={() => setCurrentImageIndex(-1)}
        slides={images}
        index={currentImageIndex}
        plugins={[Fullscreen, Slideshow, Thumbnails]}
      />
    </StyledGallery>
  );
};

export default Gallery;
