import {
  Navbar,
  NavigationWrapper,
  NavItem,
  NavItemLabel,
} from "./navigation.styles";
import logo from "src/assets/images/logo.svg";
import { ReactComponent as HomeIcon } from "src/assets/images/icons/icon-home.svg";

export const Navigation = () => {
  return (
    <NavigationWrapper>
      <img src={logo} alt="carasti logo" />
      <Navbar>
        <NavItem>
          <HomeIcon />
          <NavItemLabel>Home</NavItemLabel>
        </NavItem>
        <NavItem>
          <HomeIcon />
          <NavItemLabel>CRM</NavItemLabel>
        </NavItem>
        <NavItem>
          <HomeIcon />
          <NavItemLabel>Subscriptions</NavItemLabel>
        </NavItem>
        <NavItem active>
          <HomeIcon />
          <NavItemLabel>TFO</NavItemLabel>
        </NavItem>
      </Navbar>
    </NavigationWrapper>
  );
};
