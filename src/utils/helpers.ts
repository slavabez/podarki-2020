import data from "../../media/files/presents_data.json";
import { PresentGalleryItem } from "../components/PresetsGallery";

export const dissectPresentImages: (
  rawGraphqlData: any
) => PresentGalleryItem[] = (rawGraphqlData) => {
  // Create a map for storing the image data
  const presentsMap = new Map<string, PresentGalleryItem>();
  const rawJsonData = getPresentsData();
  for (const imageElement of rawGraphqlData) {
    // First, get the folder name
    const folderName = imageElement.relativePath.split(`/`)[0];
    const fileName = imageElement.relativePath.split(`/`)[1];
    if (presentsMap.has(folderName)) {
      // Add image to the map element, save image
      const existingElement: PresentGalleryItem =
        presentsMap.get(folderName) || {};
      let coverImage = undefined;
      let image = undefined;
      if (fileName === `1.jpg`) {
        coverImage = imageElement.childImageSharp.fluid;
      } else {
        image = imageElement.childImageSharp.fluid;
      }
      if (coverImage) existingElement.coverImage = coverImage;
      if (image) existingElement.images?.push(image);
    } else {
      // Create a new map element
      // Determine if the image is a cover image
      let coverImage = undefined;
      let image = undefined;
      if (fileName === `1.jpg`) {
        coverImage = imageElement.childImageSharp.fluid;
      } else {
        image = imageElement.childImageSharp.fluid;
      }
      const newElement: PresentGalleryItem = {
        relativePath: folderName,
        images: [],
      };
      if (coverImage) newElement.coverImage = coverImage;
      if (image && Array.isArray(image)) newElement.images?.push(image);
      // Find and set the metadata (price, name, etc)
      const metaInfo = rawJsonData.find((i) => i.folder === folderName);
      newElement.name = metaInfo?.name;
      newElement.number = metaInfo?.number;
      newElement.price = metaInfo?.price;
      newElement.weight = metaInfo?.weight;
      newElement.quantity = metaInfo?.quantity;
      presentsMap.set(folderName, newElement);
    }
  }
  return Array.from(presentsMap.values());
};

interface JsonPresentItem {
  number: number;
  name: string;
  weight: number;
  price: number;
  quantity: number;
  folder: string;
}
export const getPresentsData: () => JsonPresentItem[] = () => {
  return data;
};
