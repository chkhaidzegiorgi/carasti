import {
  Action,
  Actions,
  TFOHeaderTitle,
  TFOHeaderWrapper,
} from "./tfo-header.styles";

export const TFOHeader = () => {
  return (
    <TFOHeaderWrapper>
      <TFOHeaderTitle>TFO Details</TFOHeaderTitle>
      <Actions>
        <Action>Contest</Action>

        <Action>Debt collection</Action>
        <Action>Bad debt</Action>
        <Action>Waive</Action>
        <Action highlighted>Refund</Action>
      </Actions>
    </TFOHeaderWrapper>
  );
};
