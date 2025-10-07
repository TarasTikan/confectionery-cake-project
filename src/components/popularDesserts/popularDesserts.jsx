import { cakes } from "../../data/data";
import {
  PopularDessertsSection,
  Container,
  PopularDessertsTitle,
  StyledSlideCard,
  StyledSwiper,
  PopularDessertsImage,
  WrapInfo,
  ProductTitle,
  ProductPrice,
  ProductButton,
} from "./popularDesserts.styled";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export const PopularDesserts = () => {
  const swiperRef = useRef(null);
  return (
    <PopularDessertsSection
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.08,
      }}
      viewport={{ once: true, amount: 0.25 }}
    >
      <Container>
        <PopularDessertsTitle>Популярні десерти</PopularDessertsTitle>
        <StyledSwiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={30}
          speed={3000}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          onSlideChange={() => {
            if (swiperRef.current && swiperRef.current.swiper) {
              const swiper = swiperRef.current.swiper;
              swiper.autoplay.stop();
              setTimeout(() => {
                swiper.autoplay.start();
              }, 3000);
            }
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1440: {
              slidesPerView: 4,
            },
          }}
        >
          {cakes.map((item) => (
            <StyledSlideCard key={item.id}>
              <PopularDessertsImage src={item.image} alt="торт" />{" "}
              <WrapInfo>
                <ProductTitle>{item.title}</ProductTitle>
                <ProductPrice>{item.price}</ProductPrice>
                <ProductButton>Замовити</ProductButton>
              </WrapInfo>
            </StyledSlideCard>
          ))}
        </StyledSwiper>
      </Container>
    </PopularDessertsSection>
  );
};
