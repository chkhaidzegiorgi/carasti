import { FC, useCallback } from "react";

import { ReactComponent as IconKey } from "src/assets/images/icons/icon-key.svg";
import { ReactComponent as IconWide } from "src/assets/images/icons/icon-wide.svg";
import { Tooltip } from "src/components/tooltip/tooltip";
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
      <IconWrapper id="icon-key" active={isIconSelected("key")}>
        <IconKey />
        <Tooltip anchorId="icon-key" content="Key" />
      </IconWrapper>

      <IconWrapper id="icon-wide" active={isIconSelected("wide")}>
        <IconWide />
        <Tooltip anchorId="icon-wide" content="Wide" />
      </IconWrapper>
    </>
  );
};
