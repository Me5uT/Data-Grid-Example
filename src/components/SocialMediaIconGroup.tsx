import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import React from "react";
import { Stack } from "@fluentui/react";
import { SocialMediaİcons } from "../mock-data/SocialMediaİcons";

interface ISocialMediaIconGroupProps {}

export const SocialMediaIconGroup: React.FC<
  ISocialMediaIconGroupProps
> = () => {
  return (
    <Stack
      className="social-media-container"
      horizontal
      horizontalAlign="space-evenly"
    >
      {SocialMediaİcons.map(
        (socialMediaIconProps: FontAwesomeIconProps, index: number) => {
          return <FontAwesomeIcon {...socialMediaIconProps} key={index} />;
        }
      )}
    </Stack>
  );
};
