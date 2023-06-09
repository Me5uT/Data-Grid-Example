import Toolbar, { Item } from "devextreme-react/toolbar";
import "devextreme/ui/text_box";
import React from "react";
import { Logo } from "../components/Logo";
import { NavbarItem } from "../components/NavbarItem";
import { SocialMediaIconGroup } from "../components/SocialMediaIconGroup";
import DataList from "./DataList";

interface IHomeProps {}

export const Home: React.FC<IHomeProps> = () => {
  return (
    <div style={{ width: "%100" }}>
      <Toolbar height={80}>
        <Item location="before" render={Logo} />
        <Item
          location="center"
          render={() => <NavbarItem text="Hakkımızda" />}
        />
        <Item
          location="center"
          render={() => <NavbarItem text="Jüri - Yarışma Yazılımı" />}
        />
        <Item
          location="center"
          render={() => <NavbarItem text="Word Ninja" />}
        />
        <Item
          location="center"
          render={() => <NavbarItem text="Word Pyramids" />}
        />

        <Item location="after" render={() => <SocialMediaIconGroup />} />
      </Toolbar>
      <DataList />
    </div>
  );
};
