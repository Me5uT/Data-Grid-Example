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

interface ISocialMediaIconGroupProps {}

const socialMediaIconGroups: FontAwesomeIconProps[] = [
  {
    icon: faYoutube,
    size: "xl",
    style: {
      color: "white",
      backgroundColor: "#744BFC",
      padding: 7,
      borderRadius: 5,
    },
  },
  {
    icon: faInstagramSquare,
    size: "xl",
    style: {
      color: "white",
      backgroundColor: "#744BFC",
      padding: 7,
      borderRadius: 5,
    },
  },
  {
    icon: faBehance,
    size: "xl",
    style: {
      color: "white",
      backgroundColor: "#744BFC",
      padding: 7,
      borderRadius: 5,
    },
  },
  {
    icon: faLinkedinIn,
    size: "xl",
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
    <div className="social-media-container">
      {socialMediaIconGroups.map(
        (socialMediaIconProps: FontAwesomeIconProps) => {
          return <FontAwesomeIcon {...socialMediaIconProps} />;
        }
      )}
    </div>
  );
};
