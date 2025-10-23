import {Footer, Container,FooterLogo,FooterNavList,NavLink,FooterNavTitle,WrapText,Phone,SocLinkFooter,SocLinkList,Copyright} from "./footer.styled"


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
                    <SocLinkList>
                        <li><Phone href="/">+38 (xxx)-xx-xx</Phone></li>
                        <li><SocLinkFooter href="/" variant="telegram">Telegram</SocLinkFooter></li>
                        <li><SocLinkFooter href="/" variant="viber">Viber</SocLinkFooter></li>
                    </SocLinkList>
                    <Copyright>(c) Кондитерська, 2025</Copyright>
                </WrapText>
                <div>
                    <FooterNavTitle>МИ В СОЦМЕРЕЖАХ</FooterNavTitle>
        
                </div>
            </Container>
        </Footer>
    )
}