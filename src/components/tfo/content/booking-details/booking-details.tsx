import { FC } from "react";
import { formatMoney } from "src/core/helpers";
import { Booking, User } from "src/types";
import {
  Card,
  CardTitle,
  TFOInfoRow,
  TFOInfoRowValue,
} from "../tfo-content.styles";
import { InsuranceIcons } from "./insurance-icons";

interface IProps {
  booking: Booking;
  user: User;
}

export const BookingDetails: FC<IProps> = ({ user, booking }) => {
  return (
    <Card>
      <CardTitle>Booking details</CardTitle>
      <TFOInfoRow>
        Car:
        <TFOInfoRowValue>
          {booking.car_make}, {booking.car_model}
        </TFOInfoRowValue>
      </TFOInfoRow>
      <TFOInfoRow>
        Booking date:
        <TFOInfoRowValue>{booking.booking_date}</TFOInfoRowValue>
      </TFOInfoRow>
      <TFOInfoRow>
        Booking type:
        <TFOInfoRowValue>{booking.booking_type}</TFOInfoRowValue>
      </TFOInfoRow>
      <TFOInfoRow>
        Start date:
        <TFOInfoRowValue>{booking.start_date}</TFOInfoRowValue>
      </TFOInfoRow>
      <TFOInfoRow>
        End date:
        <TFOInfoRowValue>{booking.end_date}</TFOInfoRowValue>
      </TFOInfoRow>
      <TFOInfoRow>
        Price:
        <TFOInfoRowValue>
          {" "}
          {formatMoney({ amount: booking.price, currency: "AED" }).toString()}
        </TFOInfoRowValue>
      </TFOInfoRow>
      <TFOInfoRow>
        Partner:
        <TFOInfoRowValue>{booking.partner_name}</TFOInfoRowValue>
      </TFOInfoRow>
      <TFOInfoRow>
        Insurance:
        <TFOInfoRowValue>
          <InsuranceIcons icons={booking.insurance} />
        </TFOInfoRowValue>
      </TFOInfoRow>
    </Card>
  );
};
