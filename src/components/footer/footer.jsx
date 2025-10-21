import {Footer, Container,FooterLogo,FooterNavList,NavLink,FooterNavTitle,WrapText,Phone} from "./footer.styled"


export const FooterCake = () => {
    return(
        <Footer>
            <Container>
                <WrapText>
                    <FooterLogo href="/">Кондитерська</FooterLogo>
                    <FooterNavTitle>Навігація</FooterNavTitle>
                    <FooterNavList>
                        <li><NavLink href="/">Головна</NavLink></li>
                        <li><NavLink href="/">Меню</NavLink></li>
                        <li><NavLink href="/">Контакти</NavLink></li>
                    </FooterNavList>
                </WrapText>
                <WrapText>
                    <FooterNavTitle>Зв'язатися з нами</FooterNavTitle>
                    <ul>
                        <li><Phone href="/">+38 (xxx)-XX-XX</Phone></li>
                        <li><a href="/">Telegram</a></li>
                        <li><a href="/">Viber</a></li>
                    </ul>
                </WrapText>
                <div>
                    <h2>МИ В СОЦМЕРЕЖАХ</h2>
        
                </div>
            </Container>
        </Footer>
    )
}