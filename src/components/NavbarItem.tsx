import React from "react";

interface INavbarItemProps {
  text: string;
  onClick?: () => void;
}

export const NavbarItem: React.FC<INavbarItemProps> = ({ text, onClick }) => {
  return (
    <span className="navbar-item" onClick={onClick}>
      {text}
    </span>
  );
};
