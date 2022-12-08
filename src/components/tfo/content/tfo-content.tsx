import { FC } from "react";
import { Booking, User } from "src/types";
import { BookingDetails } from "./booking-details/booking-details";
import { CustomerDetails } from "./customer-details/customer-details";
import { Overall } from "./overall/overall";
import { PersonalInfo } from "./personal-info/personal-info";
import { Card, Content } from "./tfo-content.styles";

interface IProps {
  user: User;
  booking: Booking;
}

export const TFOContent: FC<IProps> = ({ user, booking }) => {
  return (
    <Content>
      <PersonalInfo user={user} booking={booking} />
      <CustomerDetails user={user} booking={booking} />
      <BookingDetails user={user} booking={booking} />
      <Overall user={user} booking={booking} />
    </Content>
  );
};
