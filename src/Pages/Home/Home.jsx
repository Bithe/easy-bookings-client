import Categories from "../../Components/Categories/Categories";
import ClientReview from "../../Components/Home/ClientReview";
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
        <ClientReview></ClientReview>


        {/* FOR SEARCHING ALL THINGS */}
        {/* <SearchBanner></SearchBanner>
        <FilterComponent></FilterComponent> */}
    </div>
  );
};

export default Home;
