import {
  BreadcrumbItem,
  BreadcrumbWrapper,
  HeaderWrapper,
  ProfileInfo,
} from "./header.styles";
import profilePhoto from "src/assets/images/profile-photo.png";
import { ReactComponent as IconArrowDown } from "src/assets/images/icons/icon-arrow-down.svg";

export const Header = () => {
  return (
    <HeaderWrapper>
      <BreadcrumbWrapper>
        <BreadcrumbItem>Subscriptions</BreadcrumbItem>
        <BreadcrumbItem>TFO Outstanding</BreadcrumbItem>
        <BreadcrumbItem active>TFO details</BreadcrumbItem>
      </BreadcrumbWrapper>
      <ProfileInfo>
        <picture>
          <img src={profilePhoto} alt="user logo" />
        </picture>
        <IconArrowDown />
      </ProfileInfo>
    </HeaderWrapper>
  );
};
