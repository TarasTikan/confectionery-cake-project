import {
  Container,
  OrderSection,
  PageTitle,
  WrapInfoOrder,
} from "./OrderPage.styled";

import { FooterCake } from "../../components/Footer/Footer";
import { OrderForm } from "../../components/OrderForm/OrderForm";
import { OrderSummary } from "../../components/OrderSummary/OrderSummary";

export const OrderPage = () => {
  return (
    <>
      <main>
        <OrderSection>
          <Container>
            <PageTitle>Оформлення замовлення</PageTitle>
            <WrapInfoOrder>
              <OrderForm />
              <OrderSummary />
            </WrapInfoOrder>
          </Container>
        </OrderSection>
      </main>
      <FooterCake />
    </>
  );
};
