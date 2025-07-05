import { useState } from "react";
import CategoryButton from "./CategoryButton";
import vegetabl from "../../assets/category/vegetable.png";
import meat from "../../assets/category/meat.png";
import fruit from "../../assets/category/fruit.png";
import snack from "../../assets/category/snack.png";
import milk from "../../assets/category/milk.png";
import drink from "../../assets/category/drink.png";
import food from "../../assets/category/food.png";
import bakery from "../../assets/category/bakery.png";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductPage from "../Product/ProductPage";
import useGetMenu from "../hooks/useGetMenu";
import ErrorPage from "../pages/ErrorPage";
import LoadingSpinner from "../shard/LoadingSpinner";
const categoryLabels = [
  {
    id: 1,
    name: "Vegetables",
    category: "vegetables",
    image: vegetabl,
  },
  {
    id: 2,
    name: "Fresh Fruits",
    category: "fresh fruits",
    image: fruit,
  },
  {
    id: 3,
    name: "Fresh Drinks",
    category: "fresh drink",
    image: drink,
  },
  {
    id: 4,
    name: "Fresh Milk",
    category: "fresh milk",
    image: milk,
  },
  {
    id: 5,
    name: "Fresh Meat",
    category: "fresh meat",
    image: meat,
  },
  {
    id: 6,
    name: "Biscuits Snack",
    category: "biscuits snack",
    image: snack,
  },
  {
    id: 7,
    name: "Fresh Bakery",
    category: "fresh bakery",
    image: bakery,
  },
  {
    id: 8,
    name: "Sea Foods",
    category: "sea foods",
    image: food,
  },
];
const CategoryItem = () => {
  const [sortOption, setSortOption] = useState("");
  const [search, setSearch] = useState("")
  const [isLoading, isError , products] = useGetMenu(sortOption);
  const [category, setCategory] = useState("mics items");
  const searchProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );
  const filterProdcuts = searchProducts.filter(
    (product) => product.category === category
  );
  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorPage />;
  return (
    <>
    <div className="space-y-5">
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 7,
          },
        }}
      >
        {categoryLabels.map((cat) => {
          const isActive = category === cat.category;
          return (
            <SwiperSlide key={cat.id}>
              <CategoryButton
                image={cat.image}
                name={cat.name}
                label={cat.category}
                activeCategory={category}
                onClick={setCategory}
                isActive={isActive}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <ProductPage
        products={filterProdcuts}
        category={category}
        setSortOption={setSortOption}
        sortOption={sortOption}
        error={isError}
        isPending={isLoading}
        setSearch={setSearch}
        search={search}
      />
    </div>
    </>
  );
};

export default CategoryItem;
