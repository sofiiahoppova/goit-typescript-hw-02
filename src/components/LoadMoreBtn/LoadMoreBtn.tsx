import css from "./LoadMoreBtn.module.css";

type LoadMoreBtnProps = {
  handleClick: () => void;
};

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ handleClick }) => {
  return (
    <button onClick={handleClick} className={css.loadMoreBtn} type="button">
      Load More
    </button>
  );
};

export default LoadMoreBtn;
