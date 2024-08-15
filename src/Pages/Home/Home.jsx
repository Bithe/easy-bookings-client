// import Categories from "../../Components/Categories/Categories";
// import Banner from "./Banner";
// import Category from "./Category";
import FilterComponent from "./FilterComponent";
import SearchBanner from "./SearcBanner";

const Home = () => {
  return (
    <div>
        {/* <Categories></Categories> */}
        {/* <Banner></Banner> */}
        {/* <Category></Category> */}


        {/* FOR SEARCHING ALL THINGS */}
        <SearchBanner></SearchBanner>
        <FilterComponent></FilterComponent>
    </div>
  );
};

export default Home;
