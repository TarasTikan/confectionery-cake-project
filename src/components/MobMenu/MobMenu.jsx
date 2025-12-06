import {
  MobMenuContainer,
  MobMenuSection,
  MobMenuBtn,
  MobMenuList,
  NavLink,
  BtnHeaderClouse,
  Backdrop
} from "./MobMenu.styled";

export const MobMenu = ({ clouseMobMenu, open }) => {
  const handleClouse = () => {
    clouseMobMenu();
  };
  return (
    <Backdrop open={open} onClick={handleClouse}>
    <MobMenuSection open={open}>
      <MobMenuContainer>
        <div>
          <BtnHeaderClouse type="button" onClick={handleClouse}>
            x
          </BtnHeaderClouse>

          <nav>
            <MobMenuList>
              <li>
                <NavLink to="/" onClick={handleClouse}>
                  Головна
                </NavLink>
              </li>
              <li>
                <NavLink to="/menu" onClick={handleClouse}>
                  Меню
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={handleClouse}>
                  Про нас
                </NavLink>
              </li>
            </MobMenuList>
          </nav>
        </div>
        <MobMenuBtn to="/menu">Замовити зараз</MobMenuBtn>
      </MobMenuContainer>
    </MobMenuSection>
    </Backdrop>
  );
};
