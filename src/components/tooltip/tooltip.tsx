import { FC } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
interface IProps {
  anchorId: string;
  content: string;
  variant?: "info" | "light";
  place?: "bottom" | "top";
}

export const Tooltip: FC<IProps> = ({
  anchorId,
  content,
  variant = "light",
  place = "bottom",
}) => {
  return (
    <ReactTooltip
      anchorId={anchorId}
      place={place}
      variant={variant}
      content={content}
      className="tooltip"
    />
  );
};
