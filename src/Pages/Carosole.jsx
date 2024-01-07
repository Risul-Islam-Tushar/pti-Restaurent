import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const MySwiper = () => {
  const [menu, setMenu] = useState([]);
  const goToFifthSlide = () => {
    // Use the swiper instance to navigate to the 5th slide
    if (swiper) {
      swiper.slideTo(5);
    }
  };
  useEffect(() => {
    fetch(
      "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
    )
      .then((res) => res.json())
      .then((data) => setMenu(data.Items));
  }, []);

  let swiper;

  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={5}
      loop={true}
      navigation={true}
      pagination={true}
      onSwiper={(swiperInstance) => (swiper = swiperInstance)}
    >
      {menu.map((item) => (
        <SwiperSlide className="" key={item.Id} item={item}>
          <div className="">
            <img src={item.ImageUrl} />
            <h1>{item.Name}</h1>
          </div>
        </SwiperSlide>
      ))}

      {/* Your custom navigation button */}
      <button onClick={goToFifthSlide}>Go to Slide 5</button>
    </Swiper>
  );
};

export default MySwiper;
