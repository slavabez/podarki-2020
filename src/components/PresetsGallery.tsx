import * as React from "react";
import styled from "styled-components";
// @ts-ignore
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

import Img from "gatsby-image";

export interface PresentGalleryItem {
  relativePath?: string;
  coverImage?: any;
  images?: any[];
  number?: number;
  name?: string;
  weight?: number;
  price?: number;
  quantity?: number;
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
  margin-top: 0.5rem;
  max-height: 60px;
  border-radius: 10px;
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
          const description = `Новогодний подарок "${id.relativePath}", 400 грамм за 1000 тенге.`;
          return (
            <GalleryItemCard key={id.relativePath}>
              <SimpleReactLightbox>
                <SRLWrapper
                  options={{
                    caption: {
                      captionFontFamily: "Roboto, sans-serif",
                    },
                  }}
                >
                  <CoverImageWrapper>
                    <Img
                      key={id.relativePath}
                      fluid={id.coverImage}
                      alt={description}
                    />
                  </CoverImageWrapper>
                  <OtherImageContainer>
                    {id?.images?.map((imgData) => (
                      <MiniImageWrapper key={imgData.src}>
                        <Img fluid={imgData} alt={description} />
                      </MiniImageWrapper>
                    ))}
                  </OtherImageContainer>
                  <MetadataContainer>
                    <Price>{id.price} ₸</Price>
                    <Name>{id.name}</Name>
                    <Weight>{id.weight}г</Weight>
                  </MetadataContainer>
                </SRLWrapper>
              </SimpleReactLightbox>
            </GalleryItemCard>
          );
        })}
      </GalleryWrapper>
    </GallerySection>
  );
};

export default Gallery;
