import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4rem 3.8rem 0;
  justify-content: space-between;
`;

export const Card = styled.div`
  margin-right: 24px;
  border: 1px solid #dcdde0;
  box-shadow: 0px 4px 8px rgba(124, 128, 142, 0.06);
  border-radius: 24px;
  padding: 3.2rem;
  width: calc((100% - (25px * 3)) / 4);

  &:last-child {
    margin-right: 0;
  }
`;

export const TFOInfoRow = styled.div`
  font-weight: 400;
  color: #7c808e;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2.4rem; ;
`;

export const TFOInfoRowValue = styled.div`
  font-weight: 500;
  color: #333333;
`;
export const CardTitle = styled.h2`
  font-weight: 700;
  font-size: 2rem;
  color: #333333;
`;

export const Breakline = styled.div`
  width: calc(100% + 6.4rem);
  position: relative;
  left: -3.2rem;
  height: 1px;
  background: #f2f3f5;
  margin-top: 3rem;
`;
