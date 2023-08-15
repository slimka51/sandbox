import { DesktopStatus } from ".";

export default {
  title: "Components/DesktopStatus",
  component: DesktopStatus,
  argTypes: {
    style: {
      options: ["black", "white"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    style: "black",
    className: {},
    ellipseClassName: {},
    ellipseClassNameOverride: {},
    divClassName: {},
    divClassNameOverride: {},
    ellipseClassName1: {},
  },
};
