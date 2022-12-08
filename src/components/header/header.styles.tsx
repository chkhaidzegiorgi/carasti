import styled, { css } from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  padding: 7rem 3.8rem 5rem;
  height:18rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BreadcrumbWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BreadcrumbItem = styled.div<{ active?: boolean }>`
  ${({ active }) => css`
    color: #7c808e;
    font-weight: 400;
    font-size: 1.6rem;
    margin-right: 6px;

    &:after {
      content: "/";
      margin-left: 6px;
    }

    &:last-child:after {
      display: none;
    }

    ${active &&
    css`
      font-weight: 700;
      color: #333333;
    `}
  `}
`;

export const ProfileInfo = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  svg {
    margin-left: 6px;
  }
`;
