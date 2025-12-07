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
import { useDispatch, useSelector } from "react-redux";
import { getCartItems, openCartItems } from "../../redux/selectors";
import { addCart, toggleCart } from "../../redux/cartSlice";
import { ModalCart } from "../modalCart/modalCart";
export const PopularDesserts = () => {
  const dispatch = useDispatch();
  const cart = useSelector(getCartItems);
  const isOpenCart = useSelector(openCartItems);
  const handleToggleHover = () => dispatch(toggleCart(!isOpenCart));
  const handleCakesCart = (product) => {
    if (cart.find((item) => item.id === product.id)) {
      dispatch(addCart({ ...product, quantity: 1 }));
      return;
    }
    dispatch(addCart(product));
  };

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
          preventClicks={false}
          preventClicksPropagation={false}
        >
          {cakes.map((item) => (
            <StyledSlideCard key={item.id}  >
              <PopularDessertsImage src={item.image} alt="торт" />{" "}
              <WrapInfo>
                <ProductTitle>{item.title}</ProductTitle>
                <ProductPrice>{item.price} грн</ProductPrice>
                <ProductButton onClick={() => {
                  handleCakesCart(item);
                  handleToggleHover();
                }}>Додати до кошику</ProductButton>
              </WrapInfo>
            </StyledSlideCard>
          ))}
        </StyledSwiper>
      </Container>
      <ModalCart />
    </PopularDessertsSection>
  );
};
