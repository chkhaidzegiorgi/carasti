import styled from "styled-components";

const NavigationWidth = 350;

export const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const Content = styled.div`
  width: calc(100% - ${NavigationWidth}px);
  height: 100%;
`;

export const NavigationWrapper = styled.div`
  width: ${NavigationWidth}px;
  height: 100%;
`;

export const DynamicContent = styled.div`
  height: calc(100% - 18rem);
  width: 100%;
  overflow-y: scroll;
`;
