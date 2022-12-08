import { FC, useCallback } from "react";

import { ReactComponent as IconKey } from "src/assets/images/icons/icon-key.svg";
import { ReactComponent as IconWide } from "src/assets/images/icons/icon-wide.svg";
import { IconWrapper } from "./insurance-icons.styles";

export const InsuranceIcons: FC<{ icons: string[] }> = ({ icons }) => {
  const isIconSelected = useCallback(
    (iconName: string) => {
      return icons.indexOf(iconName) > -1;
    },
    [icons]
  );

  return (
    <>
      <IconWrapper active={isIconSelected("key")}>
        <IconKey />
      </IconWrapper>

      <IconWrapper active={isIconSelected("wide")}>
        <IconWide />
      </IconWrapper>
    </>
  );
};
