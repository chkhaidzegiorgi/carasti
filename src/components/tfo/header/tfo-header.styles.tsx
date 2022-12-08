import styled, { css } from "styled-components";

export const TFOHeaderWrapper = styled.div`
  padding: 0 3.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TFOHeaderTitle = styled.h2`
  font-weight: 800;
  font-size: 2.6rem;
`;
export const Actions = styled.div`
  display: flex;
  align-items: center;
`;
export const Action = styled.div<{ highlighted?: boolean }>`
  ${({ highlighted }) => css`
    color: #007bff;
    border: 1px solid;
    border-radius: 10px;
    padding: 8px 0;
    width: 135px;
    margin-right: 16px;
    text-align: center;
    cursor: pointer;
    font-weight: 700;
    font-size: 1.4rem;

    &:last-child {
      margin-right: 0;
    }

    ${highlighted &&
    css`
      color: #fff;
      background-color: #007bff;
      border-color: #007bff;
    `}
  `}
`;
