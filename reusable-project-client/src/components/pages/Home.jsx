import CategoryItem from "../category/CategoryItem";
import Banner from "../Home/Banner";
import ProductRemainingTime from "../Product/ProductRemainingTime";
import ProductSlide from "../Product/ProductSlide";
import TrandingPropes from "../shard/TrandingPropes";
const Home = () => {
    return (
        <div className="space-y-10">
            <Banner />
            <CategoryItem />
            <TrandingPropes />
            <ProductRemainingTime />
            <ProductSlide />
        </div>
    );
};

export default Home;
