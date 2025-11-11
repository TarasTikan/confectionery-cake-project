import {
  Footer,
  WrapLinkSoc,
  LinkSoc,
  WrapSocList,
  Container,
  FooterLogo,
  FooterNavList,
  NavLink,
  FooterNavTitle,
  WrapText,
  Phone,
  SocLinkFooter,
  SocLinkList,
  Copyright,
} from "./footer.styled";
import { CallIcon } from "../../icons/callIcon";
import { TelegramIcon } from "../../icons/telegramIcon";
import { ViberIcon } from "../../icons/viberIcon";
import { FaceBookIcon } from "../../icons/facebookIcon";
import { InstagramIcon } from "../../icons/instagramIcon";
export const FooterCake = () => {
  return (
    <Footer>
      <Container>
        <WrapText>
          <FooterLogo href="/">Кондитерська</FooterLogo>
          <FooterNavTitle>Навігація</FooterNavTitle>
          <FooterNavList>
            <li>
              <NavLink to="/">Головна</NavLink>
            </li>
            <li>
              <NavLink to="/menu">Меню</NavLink>
            </li>
            <li>
              <NavLink to="/about">Про нас</NavLink>
            </li>
          </FooterNavList>
        </WrapText>
        <WrapText>
          <FooterNavTitle>Зв'язатися з нами</FooterNavTitle>
          <SocLinkList>
            <li>
              <Phone href="/">
                <CallIcon />
                +38 (xxx)-xx-xx
              </Phone>
            </li>
            <li>
              <SocLinkFooter href="/" variant="telegram">
                <TelegramIcon />
                Telegram
              </SocLinkFooter>
            </li>
            <li>
              <SocLinkFooter href="/" variant="viber">
                <ViberIcon />
                Viber
              </SocLinkFooter>
            </li>
          </SocLinkList>
          <Copyright>(c) Кондитерська, 2025</Copyright>
        </WrapText>
        <WrapSocList>
          <FooterNavTitle>МИ В СОЦМЕРЕЖАХ</FooterNavTitle>
          <WrapLinkSoc>
            <LinkSoc>
              <InstagramIcon />
            </LinkSoc>
            <LinkSoc>
              <FaceBookIcon />
            </LinkSoc>
          </WrapLinkSoc>
        </WrapSocList>
      </Container>
    </Footer>
  );
};
