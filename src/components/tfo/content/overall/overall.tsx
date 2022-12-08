import { FC, useMemo } from "react";
import { formatMoney } from "src/core/helpers";
import { Booking, User } from "src/types";
import {
  Breakline,
  Card,
  TFOInfoRow,
  TFOInfoRowValue,
} from "../tfo-content.styles";
import {
  CreditLimit,
  CreditProgress,
  DaysCount,
  DaysLabel,
  IconWrapper,
  Label,
  ProgressBar,
  ProgressBars,
  UsedCredits,
} from "./overall.styles";
import { ReactComponent as IconProgress } from "src/assets/images/icons/icon-progress.svg";

interface IProps {
  booking: Booking;
  user: User;
}

export const Overall: FC<IProps> = ({ user, booking }) => {
  const renewalColor = useMemo(() => {
    if (booking.days_untill_renewal >= 0 && booking.days_untill_renewal <= 9) {
      return "#FF4C49";
    }

    if (
      booking.days_untill_renewal >= 10 &&
      booking.days_untill_renewal <= 19
    ) {
      return "#FF9549";
    }

    return "#02C39A";
  }, [booking.days_untill_renewal]);

  return (
    <Card>
      <UsedCredits>
        {formatMoney({
          amount: booking.credits_used,
          currency: "AED",
        }).toString()}{" "}
        <Label>Credits used</Label>
      </UsedCredits>
      <CreditLimit>
        Carasti limit:
        {formatMoney({
          amount: booking.credit_limit,
          currency: "AED",
        }).toString()}
      </CreditLimit>

      <CreditProgress
        percentage={(booking.credits_used / booking.credit_limit) * 100}
      />

      <TFOInfoRow>
        Rental outstanding:
        <TFOInfoRowValue>
          {formatMoney({
            amount: booking.rental_os,
            currency: "AED",
          }).toString()}
        </TFOInfoRowValue>
      </TFOInfoRow>

      <TFOInfoRow>
        TFO outstanding:
        <TFOInfoRowValue>
          {formatMoney({
            amount: booking.tfo_os,
            currency: "AED",
          }).toString()}
        </TFOInfoRowValue>
      </TFOInfoRow>

      <TFOInfoRow>
        Total outstanding:
        <TFOInfoRowValue>
          <Label>
            {formatMoney({
              amount: booking.rental_os + booking.tfo_os,
              currency: "AED",
            }).toString()}
          </Label>
        </TFOInfoRowValue>
      </TFOInfoRow>

      <Breakline />

      <ProgressBars>
        <ProgressBar>
          <DaysCount>{booking.invoice_ageing}</DaysCount>
          <DaysLabel>Days</DaysLabel>

          <IconWrapper percentage={100} fillColor={"#7E5D5D"}>
            <IconProgress />
          </IconWrapper>
          <Label>Invoice Ageing</Label>
        </ProgressBar>

        <ProgressBar>
          <DaysCount>{booking.days_untill_renewal}</DaysCount>
          <DaysLabel>Days</DaysLabel>

          <IconWrapper
            percentage={((30 - booking.days_untill_renewal) / 30) * 100}
            fillColor={renewalColor}
          >
            <IconProgress />
          </IconWrapper>
          <Label>Until Renewal</Label>
        </ProgressBar>
      </ProgressBars>
    </Card>
  );
};
