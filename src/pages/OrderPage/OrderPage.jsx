import { Container, OrderSection, FormTitle,Form,Input, PageTitle, SubmitButton,WrapInfoOrder } from "./OrderPage.styled"

export const OrderPage = () => {
    return(
        <main>
            <OrderSection>
                <Container>
                    <PageTitle>Оформлення замовлення</PageTitle>
                    <WrapInfoOrder>
                        <Form>
                            <FormTitle>Інформація про покупця</FormTitle>
                            <label>
                                Ім'я та прізвище отримувача
                                <Input type="text"/>
                            </label>
                             <label>
                                Телефон
                                <Input type="number"/>
                            </label>
                             <label>
                                Електронна пошта
                                <Input type="email"/>
                            </label>
                             <label>
                                Місто
                                <Input type="text"/>
                            </label>
                             <label>
                                Адреса отримувача
                                <Input type="text"/>
                            </label>
                            <SubmitButton>Оформити замовлення</SubmitButton>
                        </Form>
                        <div>
                            <h2>Ваше замовлення</h2>
                            <ul>
                                <li>

                                </li>
                            </ul>
                            <p>Підсумок:</p>
                            <p>Всього:</p>
                        </div>
                    </WrapInfoOrder>
                </Container>
            </OrderSection>
        </main>
    )
}