import * as React from "react";
import styled from "styled-components";
// @ts-ignore
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

import Img from "gatsby-image";

export interface PresentGalleryItem {
  relativePath?: string;
  coverImage?: any;
  images?: any[];
  number: number;
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

const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 3px solid #9c9afd;
  border-radius: 2rem;
`;

const FilterTitle = styled.button`
  font-family: "Roboto", sans-serif;
  margin: 0;
  font-weight: 400;
  font-size: 0.9rem;
  padding: 0.5rem;
  text-align: center;
  background-color: transparent;
  border: none;
  width: 100%;
`;

const FilterBoxWrapper = styled.form`
  width: 100%;
  border-top: 2px solid #c4c4c4;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FilterCheckbox = styled.div`
  padding: 5px;
  display: flex;
  width: 150px;
  input[type="checkbox"] {
    margin-right: 10px;
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
  width: 220px;
  border-radius: 20px;
  overflow: hidden;
`;

const OtherImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 220px;
  grid-gap: 5px;
  padding: 10px 0;
`;

const MiniImageWrapper = styled.div`
  max-height: 70px;
  border-radius: 10px;
  overflow: hidden;

  &:nth-child(n + 4) {
    display: none;
  }
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
  color: #969696;
  padding: 0.5rem 0;
`;

interface FilterOptions {
  first: boolean;
  second: boolean;
  third: boolean;
  fourth: boolean;
}

interface Limit {
  from: number;
  to: number;
}

const Gallery: React.FC<{ imageData: PresentGalleryItem[] }> = ({
  imageData,
}) => {
  console.log(`Gallery rendering`);
  const [isOpen, setIsOpen] = React.useState(true);
  const [options, setOptions] = React.useState<FilterOptions>({
    first: false,
    second: false,
    third: false,
    fourth: false,
  });
  const [sort, setSort] = React.useState(`none`);

  const toggleFilter = () => {
    setIsOpen(!isOpen);
  };

  const calculateFilter: (
    imageData: PresentGalleryItem[],
    options: FilterOptions,
    sort: string
  ) => PresentGalleryItem[] = (imageData, options, sort) => {
    // Create the limits
    const limits: { [name: string]: Limit } = {
      first: {
        from: 0,
        to: 800,
      },
      second: {
        from: 800,
        to: 1500,
      },
      third: {
        from: 1500,
        to: 2500,
      },
      fourth: {
        from: 2500,
        to: 99999,
      },
    };
    let activeLimits: Limit[] = [];
    // Determine which limits are currently active
    Object.entries(options).forEach(([key, value]) => {
      if (value) activeLimits.push(limits[key]);
    });

    // If no active filters are selected, don't filter
    if (activeLimits.length === 0) activeLimits.push({ from: 0, to: 99999 });

    console.log(`Active limits`, activeLimits);
    // Filter out products based on the limits
    let items = imageData.filter((value) => {
      // For each limit, check if current value satisfies at least one
      for (const limit of activeLimits) {
        if (
          value.price &&
          value.price >= limit.from &&
          value.price <= limit.to
        ) {
          return true;
        }
      }
      return false;
    });

    // Now sort, if needed
    if (sort === `cheap`) {
      return items.sort((a, b) => {
        if (a.price && b.price) {
          return a.price - b.price;
        } else {
          return -1;
        }
      });
    } else if (sort === `expensive`) {
      return items.sort((a, b) => {
        if (a.price && b.price) {
          return b.price - a.price;
        } else {
          return -1;
        }
      });
    }

    return items;
  };

  const presentsToShow = React.useMemo(
    () => calculateFilter(imageData, options, sort),
    [imageData, options, sort]
  );

  console.log(presentsToShow);

  const handleInputChange = (e: any) => {
    setOptions({ ...options, [e.target.name]: e.target.checked });
  };

  return (
    <GallerySection>
      <FilterSection>
        <FilterTitle onClick={toggleFilter}>Фильтр по цене</FilterTitle>
        {isOpen ? (
          <FilterBoxWrapper>
            <FilterCheckbox>
              <label>
                <input
                  name="first"
                  checked={options.first}
                  onChange={handleInputChange}
                  type="checkbox"
                />
                250 - 800₸
              </label>
            </FilterCheckbox>
            <FilterCheckbox>
              <label>
                <input
                  name="second"
                  checked={options.second}
                  onChange={handleInputChange}
                  type="checkbox"
                />
                800 - 1500₸
              </label>
            </FilterCheckbox>
            <FilterCheckbox>
              <label>
                <input
                  name="third"
                  checked={options.third}
                  onChange={handleInputChange}
                  type="checkbox"
                />
                1500 - 2500₸
              </label>
            </FilterCheckbox>
            <FilterCheckbox>
              <label>
                <input
                  name="fourth"
                  checked={options.fourth}
                  onChange={handleInputChange}
                  type="checkbox"
                />
                2500₸+
              </label>
            </FilterCheckbox>
          </FilterBoxWrapper>
        ) : null}
      </FilterSection>
      <FilterButtons>
        <button
          onClick={() => {
            setSort(`cheap`);
          }}
        >
          Сначала дешевле
        </button>
        <button
          onClick={() => {
            setSort(`expensive`);
          }}
        >
          Сначала дороже
        </button>
      </FilterButtons>
      <GalleryWrapper>
        {presentsToShow.map((id) => {
          if (id.number === -1) {
            console.error(`Image not found - ${id.relativePath}`);
          }
          const description = `Новогодний подарок "${id.name}", ${id.weight}гр за ${id.price} тенге.`;
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
                    <Price>{id.price}₸</Price>
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
