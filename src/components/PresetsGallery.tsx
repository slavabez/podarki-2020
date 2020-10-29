import * as React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

export interface PresentGalleryItem {
  relativePath: string;
  coverImage?: any;
  images?: any[];
}

const GallerySection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const FilterButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  padding: 1rem 0;

  button {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 0.9rem;

    padding: 0.5rem;
    border: 3px solid #9c9afd;
    border-radius: 3rem;
    text-align: center;
    margin-bottom: 1rem;
    background-color: transparent;
  }
`;

const GalleryWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const GalleryItemCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
`;
const CoverImageWrapper = styled.div`
  width: 210px;
  border-radius: 20px;
  overflow: hidden;
`;
const OtherImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 210px;
  grid-gap: 5px;
  padding: 5px;
`;
const MiniImageWrapper = styled.div`
  max-height: 60px;
  border-radius: 20px;
  overflow: hidden;
`;

const MetadataContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
const Price = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 1.8rem;
  padding: 0.5rem 0;
`;
const Name = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  padding: 0.5rem 0;
`;
const Weight = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  color: #c4c4c4;
  padding: 0.5rem 0;
`;

const Gallery: React.FC<{ imageData: PresentGalleryItem[] }> = ({
  imageData,
}) => {
  return (
    <GallerySection>
      <FilterButtons>
        <button>Сначала дешевле</button>
        <button>Сначала дороже</button>
      </FilterButtons>
      <GalleryWrapper>
        {imageData.map((id) => {
          return (
            <GalleryItemCard>
              <CoverImageWrapper>
                <Img key={id.relativePath} fluid={id.coverImage} />
              </CoverImageWrapper>
              <OtherImageContainer>
                {id.images.map((imgData) => (
                  <MiniImageWrapper>
                    <Img key={imgData?.src} fluid={imgData} />
                  </MiniImageWrapper>
                ))}
              </OtherImageContainer>
              <MetadataContainer>
                <Price>1000 ₸</Price>
                <Name>{id.relativePath}</Name>
                <Weight>455г</Weight>
              </MetadataContainer>
            </GalleryItemCard>
          );
        })}
      </GalleryWrapper>
    </GallerySection>
  );
};

export default Gallery;
