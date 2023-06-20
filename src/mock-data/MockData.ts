import { mockData } from "../api/MockAxios";
import { IMockDataModel } from "../model/MockDataModel";

export const defaultData: IMockDataModel[] = [
  {
    id: "1",
    link: "instagram.com/mobilerast/",
    socialMedia: "instagram",
    description:
      "We'll help you to finish your development project succesfully.",
  },
  {
    id: "2",
    link: "tr.linkedin.com/rastmobile",
    socialMedia: "linkedin",
    description:
      "Hire vetted developers from Rast Mobile to scale up your tech projects.",
  },
  {
    id: "3",
    link: "behance.net/rastmobile",
    socialMedia: "behance",
    description:
      "Software Development Agency Rast Mobile Information Technology Ltd.",
  },
  {
    id: "4",
    link: "twitter.com/rastmobile",
    socialMedia: "twitter",
    description:
      "Software Development Agency Rast Mobile Information Technology Ltd.",
  },
];

export const initializedMockData: IMockDataModel = {
  id: "",
  link: "",
  socialMedia: "",
  description: "",
};
