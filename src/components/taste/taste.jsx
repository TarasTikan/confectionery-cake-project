import {
  TasteSection,
  Container,
  StyledSwiper,
  TasteImage,
  TasteTitle,
  StyledSlideCard,
  TasteTitleProduct,
  TasteBtnProduct,
  DescriptionContainer,
  TasteTextDescribe,
} from "./taste.styled";
import { fillings } from "../../data/data";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { useRef, useState } from "react";
import { ArrowIcon } from "../../icons/arrowIcon";
export const Tastes = (e) => {
  const swiperRef = useRef(null);
  const [openDescribe, setOpenDescribe] = useState(null);
  const toggleDescribeTasteBtn = (id) => {
    if (openDescribe === id) {
      setOpenDescribe(null);
    } else {
      setOpenDescribe(id);
    }
  };
  return (
    <TasteSection>
      <Container>
        <TasteTitle>Смаки</TasteTitle>
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
              slidesPerView: 2,
            },
            600: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1440: {
              slidesPerView: 5,
            },
          }}
        >
          {fillings.map((item) => (
            <StyledSlideCard key={item.id}>
              <TasteTitleProduct>{item.title}</TasteTitleProduct>
              <TasteImage src={item.image} />
              <DescriptionContainer
                active={(openDescribe === item.id).toString()}
              >
                <TasteTextDescribe>{item.description}</TasteTextDescribe>
              </DescriptionContainer>
              <TasteBtnProduct
                active={(openDescribe === item.id).toString()}
                onClick={() => toggleDescribeTasteBtn(item.id)}
              >
                <ArrowIcon />
              </TasteBtnProduct>
            </StyledSlideCard>
          ))}
        </StyledSwiper>
      </Container>
    </TasteSection>
  );
};
