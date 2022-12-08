import styled, { css } from "styled-components";

export const Label = styled.div`
  font-weight: 700;
`;

const ProgressBarWidth = 95;

export const UsedCredits = styled.div`
  font-weight: 500;
  font-size: 1.8rem;
  color: #ff4c49;
  display: flex;
  align-items: baseline;

  ${Label} {
    font-weight: 500;
    font-size: 1.2rem;
    color: #a4a5a6;
    margin-left: 4px;
  }
`;

export const CreditProgress = styled.div<{ percentage: number }>`
  background: #eeeeee;
  border-radius: 18px;
  position: relative;
  overflow: hidden;
  height: 12px;
  width: 100%;
  margin-top: 1rem;

  ${({ percentage }) => css`
    &:after {
      position: absolute;
      height: 100%;
      content: "";
      width: ${percentage}%;
      background: #ff4c49;
    }
  `};
`;

export const CreditLimit = styled.div`
  font-weight: 500;
  color: #72767c;
  font-size: 1.2rem;
`;

export const IconWrapper = styled.div<{
  percentage: number;
  fillColor: string;
}>`
  ${({ percentage, fillColor }) => css`
    svg {
      width: ${ProgressBarWidth}px;
      height: ${ProgressBarWidth}px;
    }

    path {
      stroke-width: 10;
    }

    .grey {
      stroke: #eeeeee;
    }

    .colored {
      stroke: ${fillColor};
      stroke-dasharray: 248;
      stroke-dashoffset: ${248 * ((100 - percentage) / 100)};
    }
  `}
`;

export const ProgressBars = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
`;
export const ProgressBar = styled.div`
  position: relative;
`;

export const DaysCount = styled.div`
  font-weight: 700;
  font-size: 1.6rem;
  color: #242731;
  width: ${ProgressBarWidth}px;
  top: 40px;
  text-align: center;
  position: absolute;
`;

export const DaysLabel = styled.div`
  color: inherit;
  font-size: 1.2rem;
  font-weight: 700;
  position: absolute;
  top: 70px;
  width: ${ProgressBarWidth}px;
  text-align: center;
`;
