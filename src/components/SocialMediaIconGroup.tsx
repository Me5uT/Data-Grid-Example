import React from "react";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faInstagramSquare,
  faBehance,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Stack } from "@fluentui/react";

interface ISocialMediaIconGroupProps {}

const socialMediaIconGroups: FontAwesomeIconProps[] = [
  {
    icon: faYoutube,
    size: "lg",
    style: {
      color: "white",
      backgroundColor: "#744BFC",
      padding: 7,
      borderRadius: 5,
    },
  },
  {
    icon: faInstagramSquare,
    size: "lg",
    style: {
      color: "white",
      backgroundColor: "#744BFC",
      padding: 7,
      borderRadius: 5,
    },
  },
  {
    icon: faBehance,
    size: "lg",
    style: {
      color: "white",
      backgroundColor: "#744BFC",
      padding: 7,
      borderRadius: 5,
    },
  },
  {
    icon: faLinkedinIn,
    size: "lg",
    style: {
      color: "white",
      backgroundColor: "#744BFC",
      padding: 7,
      borderRadius: 5,
    },
  },
];

export const SocialMediaIconGroup: React.FC<
  ISocialMediaIconGroupProps
> = () => {
  return (
    <Stack
      className="social-media-container"
      horizontal
      horizontalAlign="space-evenly"
    >
      {socialMediaIconGroups.map(
        (socialMediaIconProps: FontAwesomeIconProps, index: number) => {
          return <FontAwesomeIcon {...socialMediaIconProps} key={index} />;
        }
      )}
    </Stack>
  );
};
