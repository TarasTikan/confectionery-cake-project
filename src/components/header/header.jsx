import { Header, Container } from "./header.styled";

export const header = () => {
  return (
    <Header>
      <Container>
        <a href="/">Кондитерська</a>
        <nav>
          <ul>
            <li>
              <a href="/">Головна</a>
            </li>
            <li>
              <a href="/">Меню</a>
            </li>
            <li>
              <a href="/">Про нас</a>
            </li>
            <li>
              <a href="/">контакти</a>
            </li>
          </ul>
        </nav>
        <button type="button">Замовити зараз</button>
        <a href="0">корз</a>
      </Container>
    </Header>
  );
};
