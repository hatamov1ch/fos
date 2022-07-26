import StyledGallery, { Content, Images, ImageWrapper } from "./Gallery.styled";

//importing necessary components
import Section from "../Section";

const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1601628828688-632f38a5a7d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1009&q=80",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1615529182904-14819c35db37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1392&q=80",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
];

const Gallery = () => {
  const renderImages = (images) => {
    if (!images || images.length <= 0) {
      console.error("No data to render.");
      return null;
    }

    return images.map(({ id, src }) => (
      <ImageWrapper key={`image-${id}`}>
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
    </StyledGallery>
  );
};

export default Gallery;
