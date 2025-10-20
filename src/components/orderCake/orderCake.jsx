import {OrderCakeSection, Container,TitleOrder,ListSocOrder,SocLinkOrder,CakeImage,OrderText} from "./orderCake.styled"
import orderCakeImg from "../../img/orderCakeImg.png"
export const OrderCake = () => {
    return(
        <OrderCakeSection initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.08,
      }}
      viewport={{ once: true, amount: 0.25 }}>
            <Container>
                <TitleOrder>Замов свій торт прямо зараз!</TitleOrder>
                <OrderText>Напишіть нам у зручний Вам месенджер або зателефону - обговоримо всі деталі й створимо ідеальний десерт &#128156;</OrderText>
                <ListSocOrder>
                    <li><SocLinkOrder href="" variant="telegram">Telegram</SocLinkOrder></li>
                    <li><SocLinkOrder href="" variant="viber">Viber</SocLinkOrder></li>
                    <li><SocLinkOrder href="" variant="phone">+380 (xx) xxx-xx-xx</SocLinkOrder></li>
                </ListSocOrder>
                <CakeImage src={orderCakeImg}/>
                </Container>
        </OrderCakeSection>
    )
}