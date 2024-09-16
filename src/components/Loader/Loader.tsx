import { MagnifyingGlass } from "react-loader-spinner";

const Loader: React.FC = () => {
  return (
    <MagnifyingGlass
      visible={true}
      height="80"
      width="80"
      ariaLabel="magnifying-glass-loading"
      wrapperStyle={{
        display: "block",
        margin: "auto",
      }}
      wrapperClass="magnifying-glass-wrapper"
      glassColor="#c0efff"
      color="rgb(84, 65, 196)"
    />
  );
};

export default Loader;
