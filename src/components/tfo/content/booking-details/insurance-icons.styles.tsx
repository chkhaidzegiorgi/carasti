import styled, { css } from "styled-components";

export const IconWrapper = styled.span<{ active: boolean }>`
  ${({ active }) => css`
    margin-left: 1.2rem;
    color: #c4c4c4;

    ${active &&
    css`
      color: #02c39a;
    `}
  `}
`;
