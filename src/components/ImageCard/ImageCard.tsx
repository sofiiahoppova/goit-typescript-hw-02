import { ImageInterface } from "../../types";
import css from "./ImageCard.module.css";

type ImageCardProps = {
  image: ImageInterface;
  openModal: () => void;
  setCurrentImage: (obj: { url: string; alt: string }) => void;
};

const ImageCard: React.FC<ImageCardProps> = ({
  image,
  openModal,
  setCurrentImage,
}) => {
  const handleClick = () => {
    setCurrentImage({ url: image.urls.full, alt: image.alt_description });

    openModal();
  };

  return (
    <div onClick={handleClick} className={css.wrapper}>
      <img
        className={css.imageCard}
        src={image.urls.small}
        alt={image.alt_description}
      />
      <div className={css.descriptionWrapper}>
        <p>Likes: {image.likes}</p>
      </div>
    </div>
  );
};

export default ImageCard;
