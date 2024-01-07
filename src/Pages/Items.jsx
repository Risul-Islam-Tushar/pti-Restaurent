import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Items = () => {
  const sliderRef = useRef(Slider);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => setMenu(data.Items));
  }, []);
  const popularItems = menu.filter((item) => item.IsPopular);
  console.log(popularItems);
  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <div className="max-w-5xl mx-auto mt-16">
      <div>
        <div className="flex justify-between mx-2">
          <div>
            <h1 className="text-lg font-semibold">Popular</h1>
          </div>
          <div className="flex ">
            <div>
              <h1 className="text-red-600">Add More</h1>
            </div>
            <div
              className="z-50 flex items-center justify-end"
              style={{ textAlign: "right", marginTop: "-12px" }}
            >
              <button
                className="z-50 hidden lg:flex  h-12 w-12 items-center justify-center rounded-full border-2 border-orange"
                onClick={previous}
              >
                <FaAngleLeft />
              </button>
              <button
                className="z-50 flex h-12 w-12 items-center justify-center rounded-full border-2 border-orange"
                onClick={next}
              >
                <FaAngleRight />
              </button>
            </div>
          </div>
        </div>
        <div className="mx-1">
          <Slider ref={sliderRef} {...settings}>
            {popularItems.map((item, id) => (
              <div key={id}>
                <img
                  className="h-40 md:h-60  w-20 md:w-48 rounded-lg mx-auto"
                  src={item.ImageUrl}
                />
                <h1 className="text-center">{item.Name}</h1>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Items;
