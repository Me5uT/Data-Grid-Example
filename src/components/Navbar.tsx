import { Stack } from "@fluentui/react";
import React from "react";
import { Logo } from "./Logo";
import { NavbarItems } from "./NavbarItems";
import { SocialMediaIconGroup } from "./SocialMediaIconGroup";

interface INavbarProps {}

export const Navbar: React.FC<INavbarProps> = () => {
  return (
    <Stack horizontal enableScopedSelectors>
      <Stack.Item grow>
        <Logo />
      </Stack.Item>
      <Stack.Item grow disableShrink align="center">
        <NavbarItems />
      </Stack.Item>
      <Stack.Item grow>
        <SocialMediaIconGroup />
      </Stack.Item>
    </Stack>
  );
};
