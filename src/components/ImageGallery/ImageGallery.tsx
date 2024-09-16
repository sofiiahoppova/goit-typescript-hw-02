import ImageCard from "../ImageCard/ImageCard";
import { ImageInterface } from "../../types";
import css from "./ImageGallery.module.css";

type ImageGalleryProps = {
  images: ImageInterface[],
  openModal: () => void,
  setCurrentImage: (obj: { url: string, alt: string }) => void,
};

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  openModal,
  setCurrentImage,
}) => {
  return (
    <ul className={css.list}>
      {images.map((image) => (
        <li className={css.listItem} key={image.id}>
          <ImageCard
            openModal={openModal}
            setCurrentImage={setCurrentImage}
            image={image}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
