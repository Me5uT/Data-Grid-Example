import React from "react";

import { Link, Stack } from "@fluentui/react";
import { navbarMenuItems } from "../mock-data/NavbarMenuItems";
import { INavbarMenuItems } from "../model/NavbarMenuItems";

interface INavbarItemsProps {}

export const NavbarItems: React.FC<INavbarItemsProps> = () => {
  return (
    <Stack
      enableScopedSelectors
      grow
      wrap
      verticalAlign="center"
      horizontal
      horizontalAlign="space-evenly"
      tokens={{ childrenGap: 50 }}
      styles={{
        root: {
          width: "70%",
          alignItems: "center",
        },
      }}
    >
      {navbarMenuItems.map((menuItem: INavbarMenuItems, index: number) => {
        return (
          <Stack key={index}>
            <Link href={menuItem.link} styles={{ root: { color: "black" } }}>
              {menuItem.displayName}
            </Link>
          </Stack>
        );
      })}
    </Stack>
  );
};
