import { PresentGalleryItem } from "../components/PresetsGallery";

export const dissectPresentImages: (any) => PresentGalleryItem[] = (
  rawGraphqlData
) => {
  // Create a map for storing the image data
  const presentsMap = new Map<string, PresentGalleryItem>();
  for (const imageElement of rawGraphqlData) {
    // First, get the folder name
    const folderName = imageElement.relativePath.split(`/`)[0];
    const fileName = imageElement.relativePath.split(`/`)[1];
    if (presentsMap.has(folderName)) {
      // Add image to the map element, save image
      const existingElement = presentsMap.get(folderName);
      let coverImage = undefined;
      let image = undefined;
      if (fileName === `1.jpg`) {
        coverImage = imageElement.childImageSharp.fluid;
      } else {
        image = imageElement.childImageSharp.fluid;
      }
      if (coverImage) existingElement.coverImage = coverImage;
      if (image) existingElement.images.push(image);
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
      if (image && Array.isArray(image)) newElement.images.push(image);
      presentsMap.set(folderName, newElement);
    }
  }
  return Array.from(presentsMap.values());
};
