import { FC } from "react";
import { Booking, User } from "src/types";
import {
  Birthday,
  ContactDetail,
  ContactDetailValue,
  FullName,
  Icon,
  IconsWrapper,
  PersonalInfoWrapper,
  Status,
} from "./personal-info.styles";
import { ReactComponent as IconDelivery } from "src/assets/images/icons/icon-delivery.svg";
import { ReactComponent as IconPhone } from "src/assets/images/icons/icon-phone.svg";
import profileImage from "src/assets/images/personal-profile.png";
import { Breakline, Card } from "../tfo-content.styles";
import { Tooltip } from "src/components/tooltip/tooltip";

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
          <Icon id="icon-delivery">
            <IconDelivery />
            <Tooltip anchorId="icon-delivery" content="Delivery" />
          </Icon>

          <Icon id="icon-test1">
            <IconDelivery />
            <Tooltip anchorId="icon-test1" content="Test 1" />
          </Icon>

          <Icon id="icon-test2">
            <IconDelivery />
            <Tooltip anchorId="icon-test2" content="Test 2" />
          </Icon>
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
