import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
const ProductSlideCard = ({ fruits, vegetables, mics }) => {
  return (
    <>
      <div className="md:grid md:grid-cols-3 gap-4 space-y-4 md:space-y-0">
        {/* vegetables */}
        <div>
          <Swiper
            modules={[Autoplay]}
            speed={1500}
            loop
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            slidesPerView="1"
            spaceBetween={20}
          >
            <SwiperSlide>
              <div className="flex flex-col gap-4 cursor-grab">
                {vegetables.map((item) => (
                  <div
                    key={item._id}
                    className="flex relative items-center gap-4 p-4 border rounded border-gray-200"
                  >
                    {item.tag && (
                      <span
                        className={`absolute z-20 top-2 right-2 text-xs font-bold px-2 py-0.5 rounded ${
                          item.tag === "SALE"
                            ? "bg-red-200 text-red-700"
                            : "bg-green-200 text-green-700"
                        }`}
                      >
                        {item.tag}
                      </span>
                    )}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded"
                    />
                    <div>
                      <h2 className="font-semibold text-nowrap">{item.name}</h2>
                      <p>
                        <span className="font-bold text-lg">${item.price}</span>{" "}
                        {/* <span className="text-gray-400 line-through">
                          ${item.oldPrice}
                        </span> */}
                      </p>
                      <Rating
                        style={{ maxWidth: 70 }}
                        value={item.rating}
                        readOnly
                      />
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col gap-4 cursor-grab">
                {vegetables.map((item) => (
                  <div
                    key={item._id}
                    className="flex relative items-center gap-4 p-4 border rounded border-gray-200"
                  >
                    {item.tag && (
                      <span
                        className={`absolute z-20 top-2 right-2 text-xs font-bold px-2 py-0.5 rounded ${
                          item.tag === "SALE"
                            ? "bg-red-200 text-red-700"
                            : "bg-green-200 text-green-700"
                        }`}
                      >
                        {item.tag}
                      </span>
                    )}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded"
                    />
                    <div>
                      <h2 className="font-semibold text-nowrap">{item.name}</h2>
                      <p>
                        <span className="font-bold text-lg">${item.price}</span>{" "}
                        {/* <span className="text-gray-400 line-through">
                          ${item.oldPrice}
                        </span> */}
                      </p>
                      <Rating
                        style={{ maxWidth: 70 }}
                        value={item.rating}
                        readOnly
                      />
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col gap-4 cursor-grab">
                {vegetables.map((item) => (
                  <div
                    key={item._id}
                    className="flex relative items-center gap-4 p-4 border rounded border-gray-200"
                  >
                    {item.tag && (
                      <span
                        className={`absolute z-20 top-2 right-2 text-xs font-bold px-2 py-0.5 rounded ${
                          item.tag === "SALE"
                            ? "bg-red-200 text-red-700"
                            : "bg-green-200 text-green-700"
                        }`}
                      >
                        {item.tag}
                      </span>
                    )}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded"
                    />
                    <div>
                      <h2 className="font-semibold text-nowrap">{item.name}</h2>
                      <p>
                        <span className="font-bold text-lg">${item.price}</span>{" "}
                        {/* <span className="text-gray-400 line-through">
                          ${item.oldPrice}
                        </span> */}
                      </p>
                      <Rating
                        style={{ maxWidth: 70 }}
                        value={item.rating}
                        readOnly
                      />
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* fruits */}
        <div>
          <Swiper
            modules={[Autoplay]}
            speed={2000}
            loop
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            slidesPerView="1"
            spaceBetween={20}
          >
            <SwiperSlide>
              <div className="flex flex-col gap-4 cursor-grab">
                {fruits.map((item) => (
                  <div
                    key={item._id}
                    className="flex relative items-center gap-4 p-4 border rounded border-gray-200"
                  >
                    {item.tag && (
                      <span
                        className={`absolute z-20 top-2 right-2 text-xs font-bold px-2 py-0.5 rounded ${
                          item.tag === "SALE"
                            ? "bg-red-200 text-red-700"
                            : "bg-green-200 text-green-700"
                        }`}
                      >
                        {item.tag}
                      </span>
                    )}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded"
                    />
                    <div>
                      <h2 className="font-semibold text-nowrap">{item.name}</h2>
                      <p>
                        <span className="font-bold text-lg">${item.price}</span>{" "}
                        {/* <span className="text-gray-400 line-through">
                          ${item.oldPrice}
                        </span> */}
                      </p>
                      <Rating
                        style={{ maxWidth: 70 }}
                        value={item.rating}
                        readOnly
                      />
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col gap-4 cursor-grab">
                {fruits.map((item) => (
                  <div
                    key={item._id}
                    className="flex relative items-center gap-4 p-4 border rounded border-gray-200"
                  >
                    {item.tag && (
                      <span
                        className={`absolute z-20 top-2 right-2 text-xs font-bold px-2 py-0.5 rounded ${
                          item.tag === "SALE"
                            ? "bg-red-200 text-red-700"
                            : "bg-green-200 text-green-700"
                        }`}
                      >
                        {item.tag}
                      </span>
                    )}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded"
                    />
                    <div>
                      <h2 className="font-semibold text-nowrap">{item.name}</h2>
                      <p>
                        <span className="font-bold text-lg">${item.price}</span>{" "}
                        {/* <span className="text-gray-400 line-through">
                          ${item.oldPrice}
                        </span> */}
                      </p>
                      <Rating
                        style={{ maxWidth: 70 }}
                        value={item.rating}
                        readOnly
                      />
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col gap-4 cursor-grab">
                {fruits.map((item) => (
                  <div
                    key={item._id}
                    className="flex relative items-center gap-4 p-4 border rounded border-gray-200"
                  >
                    {item.tag && (
                      <span
                        className={`absolute z-20 top-2 right-2 text-xs font-bold px-2 py-0.5 rounded ${
                          item.tag === "SALE"
                            ? "bg-red-200 text-red-700"
                            : "bg-green-200 text-green-700"
                        }`}
                      >
                        {item.tag}
                      </span>
                    )}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded"
                    />
                    <div>
                      <h2 className="font-semibold text-nowrap">{item.name}</h2>
                      <p>
                        <span className="font-bold text-lg">${item.price}</span>{" "}
                        {/* <span className="text-gray-400 line-through">
                          ${item.oldPrice}
                        </span> */}
                      </p>
                      <Rating
                        style={{ maxWidth: 70 }}
                        value={item.rating}
                        readOnly
                      />
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* mics */}
        <div>
          <Swiper
            modules={[Autoplay]}
            speed={2500}
            loop
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            slidesPerView="1"
            spaceBetween={20}
          >
            <SwiperSlide>
              <div className="flex flex-col gap-4 cursor-grab">
                {mics.map((item) => (
                  <div
                    key={item._id}
                    className="flex relative items-center gap-4 p-4 border rounded border-gray-200"
                  >
                    {item.tag && (
                      <span
                        className={`absolute z-20 top-2 right-2 text-xs font-bold px-2 py-0.5 rounded ${
                          item.tag === "SALE"
                            ? "bg-red-200 text-red-700"
                            : "bg-green-200 text-green-700"
                        }`}
                      >
                        {item.tag}
                      </span>
                    )}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded"
                    />
                    <div>
                      <h2 className="font-semibold text-nowrap">{item.name}</h2>
                      <p>
                        <span className="font-bold text-lg">${item.price}</span>{" "}
                        {/* <span className="text-gray-400 line-through">
                          ${item.oldPrice}
                        </span> */}
                      </p>
                      <Rating
                        style={{ maxWidth: 70 }}
                        value={item.rating}
                        readOnly
                      />
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col gap-4 cursor-grab">
                {mics.map((item) => (
                  <div
                    key={item._id}
                    className="flex relative items-center gap-4 p-4 border rounded border-gray-200"
                  >
                    {item.tag && (
                      <span
                        className={`absolute z-20 top-2 right-2 text-xs font-bold px-2 py-0.5 rounded ${
                          item.tag === "SALE"
                            ? "bg-red-200 text-red-700"
                            : "bg-green-200 text-green-700"
                        }`}
                      >
                        {item.tag}
                      </span>
                    )}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded"
                    />
                    <div>
                      <h2 className="font-semibold text-nowrap">{item.name}</h2>
                      <p>
                        <span className="font-bold text-lg">${item.price}</span>{" "}
                        {/* <span className="text-gray-400 line-through">
                          ${item.oldPrice}
                        </span> */}
                      </p>
                      <Rating
                        style={{ maxWidth: 70 }}
                        value={item.rating}
                        readOnly
                      />
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col gap-4 cursor-grab">
                {mics.map((item) => (
                  <div
                    key={item._id}
                    className="flex relative items-center gap-4 p-4 border rounded border-gray-200"
                  >
                    {item.tag && (
                      <span
                        className={`absolute z-20 top-2 right-2 text-xs font-bold px-2 py-0.5 rounded ${
                          item.tag === "SALE"
                            ? "bg-red-200 text-red-700"
                            : "bg-green-200 text-green-700"
                        }`}
                      >
                        {item.tag}
                      </span>
                    )}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded"
                    />
                    <div>
                      <h2 className="font-semibold text-nowrap">{item.name}</h2>
                      <p>
                        <span className="font-bold text-lg">${item.price}</span>{" "}
                        {/* <span className="text-gray-400 line-through">
                          ${item.oldPrice}
                        </span> */}
                      </p>
                      <Rating
                        style={{ maxWidth: 70 }}
                        value={item.rating}
                        readOnly
                      />
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ProductSlideCard;
