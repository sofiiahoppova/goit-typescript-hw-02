import { ImageInterface } from "../../types";
import css from "./ImageModal.module.css";
import Modal from "react-modal";
Modal.setAppElement("#root");

type ImageModalProps = {
  modalIsOpen: boolean;
  currentImage: {
    url: string;
    alt: string;
  };
  closeModal: () => void;
};

const customStyles = {
  content: {
    width: "70%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
  },
};

const ImageModal: React.FC<ImageModalProps> = ({
  modalIsOpen,
  currentImage,
  closeModal,
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      style={customStyles}
    >
      <img
        className={css.photo}
        src={currentImage.url}
        alt={currentImage.alt}
      />
      <p className={css.descrription}>{currentImage.alt}</p>
    </Modal>
  );
};

export default ImageModal;
