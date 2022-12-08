import { FC } from "react";
import { Booking, User } from "src/types";
import {
  Birthday,
  ContactDetail,
  ContactDetailValue,
  FullName,
  IconsWrapper,
  PersonalInfoWrapper,
  Status,
} from "./personal-info.styles";
import { ReactComponent as IconDelivery } from "src/assets/images/icons/icon-delivery.svg";
import { ReactComponent as IconPhone } from "src/assets/images/icons/icon-phone.svg";
import profileImage from "src/assets/images/personal-profile.png";
import { Breakline, Card } from "../tfo-content.styles";

interface IProps {
  user: User;
  booking: Booking;
}

export const PersonalInfo: FC<IProps> = ({ user, booking }) => {
  const userImage = user.profile_img ? user.profile_img : profileImage;
  return (
    <Card>
      <PersonalInfoWrapper>
        <img src={userImage} alt="profile" />
        <FullName>
          {user.first_name} {user.last_name}
        </FullName>

        <Birthday>{user.date_of_birth}</Birthday>

        <IconsWrapper>
          <IconDelivery /> <IconDelivery /> <IconDelivery />
        </IconsWrapper>

        <Status status={booking.primary_status}>
          {booking.primary_status}
        </Status>

        <Breakline />

        <ContactDetail>
          <IconPhone />
          <ContactDetailValue>
            +{user.phone_country_code} {user.phone}
          </ContactDetailValue>
        </ContactDetail>

        <ContactDetail>
          <IconPhone />
          <ContactDetailValue>{user.email}</ContactDetailValue>
        </ContactDetail>
      </PersonalInfoWrapper>
    </Card>
  );
};
