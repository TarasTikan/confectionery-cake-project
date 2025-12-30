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
import { ModalCart } from "../modalCart/modalCart";
import { getProductsPopular } from "../../redux/products/selectors";
import { addItemToCartAuth } from "../../redux/cart/operations";
import { getCartId, getMode } from "../../redux/cart/selectors";
import { addCart, toggleCart } from "../../redux/cart/cartSlice";
export const PopularDesserts = () => {
  const dispatch = useDispatch();
  const popularProducts = useSelector(getProductsPopular);
  const cart = useSelector(getCartItems);
    const modeCart = useSelector(getMode);
      const cartId = useSelector(getCartId)
  const isOpenCart = useSelector(openCartItems);
  const handleToggleHover = () => dispatch(toggleCart(!isOpenCart));
  const handleCakesCart = (product) => {
    if(modeCart === "guest") {
if (cart.find((item) => item.id === product.id)) {
      dispatch(addCart(product));
      return;
    }
    dispatch(addCart(product));
    }else {
       dispatch(addItemToCartAuth(cartId, product));
    }
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
          {popularProducts.map((item) => (
            <StyledSlideCard key={item.id}  >
              <PopularDessertsImage src={item.image_url} alt="торт" />
              <WrapInfo>
                <ProductTitle to={`menu/allProducts/${item.id}`}>{item.title}</ProductTitle>
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
