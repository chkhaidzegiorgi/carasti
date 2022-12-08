import { FC } from "react";
import { formatMoney } from "src/core/helpers";
import { Booking, User } from "src/types";
import {
  Card,
  CardTitle,
  TFOInfoRow,
  TFOInfoRowValue,
} from "../tfo-content.styles";

interface IProps {
  booking: Booking;
  user: User;
}

export const CustomerDetails: FC<IProps> = ({ user, booking }) => {
  return (
    <Card>
      <CardTitle>Customer details</CardTitle>
      <TFOInfoRow>
        Deposit:
        <TFOInfoRowValue>
          {formatMoney({ amount: booking.deposit, currency: "AED" }).toString()}
        </TFOInfoRowValue>
      </TFOInfoRow>
      <TFOInfoRow>
        Wallet Balance:
        <TFOInfoRowValue>
          {formatMoney({
            amount: user.wallet_balance,
            currency: "AED",
          }).toString()}
        </TFOInfoRowValue>
      </TFOInfoRow>
      <TFOInfoRow>
        CAC:
        <TFOInfoRowValue>
          {formatMoney({
            amount: user.cac,
            currency: "AED",
          }).toString()}
        </TFOInfoRowValue>
      </TFOInfoRow>
      <TFOInfoRow>
        PRN:
        <TFOInfoRowValue>
          {user.prn}
        </TFOInfoRowValue>
      </TFOInfoRow>
      <TFOInfoRow>
        LTV:
        <TFOInfoRowValue>
          {formatMoney({
            amount: +user.ltv,
            currency: "AED",
          }).toString()}
        </TFOInfoRowValue>
      </TFOInfoRow>
      <TFOInfoRow>
        Reference:
        <TFOInfoRowValue>{booking.reference}</TFOInfoRowValue>
      </TFOInfoRow>
      <TFOInfoRow>
        Sign up:
        <TFOInfoRowValue>{user.sign_up_date}</TFOInfoRowValue>
      </TFOInfoRow>
      <TFOInfoRow>
        Source:
        <TFOInfoRowValue>{user.sign_up_source}</TFOInfoRowValue>
      </TFOInfoRow>
    </Card>
  );
};
