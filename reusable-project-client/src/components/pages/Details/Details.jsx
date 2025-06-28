import slider1 from "../../../assets/images/slider1.jpg";
import slider2 from "../../../assets/images/slider2.jpg";
import slider3 from "../../../assets/images/slider3.jpg";
import slider4 from "../../../assets/images/slider4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { useRef } from "react";
import ShopTitle from "../../shard/shopTitle";
import RightSiteDetail from "../../shard/RightSiteDetail";
const Details = ({
  name,
  image,
  img,
  category,
  price,
  oldPrice,
  _id,
  rating,
  tag,
  view,
}) => {
  const swiperRef = useRef();
  return (
    <>
      <ShopTitle />
      <div className="flex flex-col lg:flex-row gap-8 justify-between">
        {/* Left Image Section */}
        <div className="w-full lg:w-1/2 h-80 border border-gray-300 rounded hover:shadow-md relative">
          <div
            className="group h-full overflow-hidden relative"
            onMouseEnter={() => swiperRef.current?.autoplay.stop()} // 🛑 Hover করলে autoplay বন্ধ
            onMouseLeave={() => swiperRef.current?.autoplay.start()} // ▶️ Mouse leave করলে আবার শুরু
          >
            <Swiper
              speed={3000}
              loop
              navigation={true}
              modules={[Navigation, Autoplay]}
              autoplay={{
                delay: 3000, // 3 seconds
                disableOnInteraction: false, // user scroll korleo autoplay বন্ধ হবে না
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper; // রেফারেন্স ধরে রাখছি autoplay stop/start করার জন্য
              }}
            >
              <SwiperSlide>
                <img className="mx-auto" src={slider1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="mx-auto" src={slider2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="mx-auto" src={slider3} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="mx-auto" src={slider4} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
          {/* Image Description */}
          <div className="absolute bottom-4 md:text-center w-full">
            <p className="text-gray-700">
              Fresh and quality foods including vegetables, juicy fruits, fish,
              meat, crispy biscuits & snacks items, and delicious seafood — all
              in one place for your everyday needs.
            </p>
          </div>
        </div>
        {/* Right Text Section */}
        <RightSiteDetail
          name={name}
          image={image}
          img={img}
          price={price}
          oldPrice={oldPrice}
          _id={_id}
          rating={rating}
          category={category}
          tag={tag}
          view={view}
        />
      </div>
    </>
  );
};

export default Details;
