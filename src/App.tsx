import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import fetchPhotos from "./fetchAPI";
import toast from "react-hot-toast";
import { ImageInterface } from "./types";

const App: React.FC = () => {
  const [images, setImages] = useState<null | ImageInterface[]>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchingValue, setSearchingValue] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [currentImage, setCurrentImage] = useState({
    url: "",
    alt: "",
  });

  const openModal = (): void => {
    setIsOpen(true);
  };

  const closeModal = (): void => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (searchingValue.trim() === "") return;
    const getPhotos = async (value: string) => {
      setError(false);
      setIsLoading(true);
      try {
        const data = await fetchPhotos(value, pageNumber);
        setImages((prevImages) => {
          if (prevImages !== null) {
            return [...prevImages, ...data.results];
          }
          return data.results;
        });

        setTotalPages(data.total_pages);
        if (data.total_pages === 0) {
          toast.error("Nothing was found for your request", {
            duration: 4000,
            position: "top-right",
          });
          return;
        }
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPhotos(searchingValue);
  }, [searchingValue, pageNumber]);

  const handleSubmit = (userValue: string): void => {
    setImages(null);
    setPageNumber(1);
    setSearchingValue(userValue);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {images !== null && (
        <ImageGallery
          images={images}
          openModal={openModal}
          setCurrentImage={setCurrentImage}
        />
      )}
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        currentImage={currentImage}
      />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {totalPages > pageNumber && (
        <LoadMoreBtn
          handleClick={() => {
            setPageNumber(pageNumber + 1);
          }}
        />
      )}
    </div>
  );
};

export default App;
