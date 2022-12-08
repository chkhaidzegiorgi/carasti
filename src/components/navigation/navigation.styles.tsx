import styled, { css } from "styled-components";

export const NavigationWrapper = styled.div`
  background: linear-gradient(180.07deg, #dde0e3 0.08%, #f4f4f4 99.96%);
  width: 100%;
  height: 100%;
  padding-top: 6.4rem;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  margin-top: 55px;
  width: 100%;
`;


const NavItemHover =  css`
color: #fff;
background-color: rgba(33, 90, 151, 0.2);
`

export const NavItem = styled.div<{ active?: boolean }>`
  ${({ active }) => css`
    display: flex;
    align-items: center;
    color: #7c808e;
    font-weight: 700;
    cursor: pointer;
    margin-bottom: 20px;
    width: 100%;
    border-radius: 14px;
    padding: 14px 22px;
    font-size: 1.8rem;
    background-color: rgba(33, 90, 151, 0);
    transition: all .3s;

    &:last-child {
      margin-bottom: 0;
    }

    &:hover {
      ${NavItemHover}
    }
    ${active && NavItemHover}
  `}
`;

export const NavItemLabel = styled.span`
  margin-left: 15px;
`;
