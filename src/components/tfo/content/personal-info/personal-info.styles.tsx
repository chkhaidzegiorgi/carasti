import styled, { css } from "styled-components";

export const PersonalInfoWrapper = styled.div``;

export const FullName = styled.div`
  font-weight: 700;
  font-size: 2rem;
`;
export const Birthday = styled.div`
  font-weight: 300;
  font-size: 1.4rem;
  color: #333333;
`;
export const IconsWrapper = styled.div`
  margin-top: 5px;
  color: #c4c4c4;
`;
export const Status = styled.div<{ status: string }>`
  background: #7c808e;
  border-radius: 30px;
  color: #fff;
  padding: 0.3rem 2.2rem;
  text-transform: capitalize;
  max-width: fit-content;
  font-weight: 700;
  font-size: 1.4rem;

  ${({ status }) => css`
    ${status === "pending" &&
    css`
      background-color: #02c39a;
    `}
  `}
`;

export const ContactDetail = styled.div`
  margin-top: 2.8rem;
  display: flex;
  align-items: center;
`;
export const ContactDetailValue = styled.div`
  font-weight: 500;
  font-size: 1.4rem;
  margin-left: 1.5rem;
  color: #333333;
`;

export const Icon = styled.span`
  margin-right: 1.8rem;
  &:last-child {
    margin-right: 0;
  }
`;
