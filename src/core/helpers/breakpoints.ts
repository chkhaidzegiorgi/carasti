import { IBreakpoints } from "src/types";

export const breakpointValues = {
  small: 375,
  medium: 768,
  large: 1024,
  xlarge: 1350,
  xxlarge: 1920,
};

const getMaxBreakPoint = (size: number) => {
  return `(max-width: ${size}px)`;
};

const getMinBreakPoint = (size: number) => {
  return `(min-width: ${size}px)`;
};

export const breakpointsMax: IBreakpoints = {
  small: getMaxBreakPoint(breakpointValues.small),
  medium: getMaxBreakPoint(breakpointValues.medium),
  large: getMaxBreakPoint(breakpointValues.large),
  xlarge: getMaxBreakPoint(breakpointValues.xlarge),
  xxlarge: getMaxBreakPoint(breakpointValues.xxlarge),
};

export const breakpointsMin: IBreakpoints = {
  small: getMinBreakPoint(breakpointValues.small + 1),
  medium: getMinBreakPoint(breakpointValues.medium + 1),
  large: getMinBreakPoint(breakpointValues.large + 1),
  xlarge: getMinBreakPoint(breakpointValues.xlarge + 1),
  xxlarge: getMinBreakPoint(breakpointValues.xxlarge + 1),
};

export const breakpointsBetween: IBreakpoints = {
  small: getMaxBreakPoint(breakpointValues.small),
  medium: `${getMinBreakPoint(breakpointValues.medium + 1)} and ${getMaxBreakPoint(breakpointValues.large)}`,
  large: `${getMinBreakPoint(breakpointValues.large + 1)} and ${getMaxBreakPoint(breakpointValues.xlarge)}`,
  xlarge: `${getMinBreakPoint(breakpointValues.xlarge + 1)} and ${getMaxBreakPoint(breakpointValues.xxlarge)}`,
  xxlarge: getMinBreakPoint(breakpointValues.xxlarge + 1),
};

export const mediaMin: IBreakpoints = {
  small: `@media screen and ${breakpointsMin.small}`,
  medium: `@media screen and ${breakpointsMin.medium}`,
  large: `@media screen and ${breakpointsMin.large}`,
  xlarge: `@media screen and ${breakpointsMin.xlarge}`,
  xxlarge: `@media screen and ${breakpointsMin.xxlarge}`,
};

export const mediaMax: IBreakpoints = {
  small: `@media screen and  ${breakpointsMax.small}`,
  medium: `@media screen and ${breakpointsMax.medium}`,
  large: `@media screen and  ${breakpointsMax.large}`,
  xlarge: `@media screen and  ${breakpointsMax.xlarge}`,
  xxlarge: `@media screen and   ${breakpointsMax.xxlarge}`,
};
