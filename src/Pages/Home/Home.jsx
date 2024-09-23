import Categories from "../../Components/Categories/Categories";
import Rooms from "../../Components/Home/Rooms";
import Banner from "./Banner";
import Category from "./Category";
// import FilterComponent from "./FilterComponent";
// import SearchBanner from "./SearcBanner";

const Home = () => {
  return (
    <div>
        <Categories></Categories>
        <Banner></Banner>
       
        <Category></Category>
        <Rooms></Rooms>


        {/* FOR SEARCHING ALL THINGS */}
        {/* <SearchBanner></SearchBanner>
        <FilterComponent></FilterComponent> */}
    </div>
  );
};

export default Home;
