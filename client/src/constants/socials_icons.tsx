
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { SocialIconProps } from "./types";
import { ImFacebook } from "react-icons/im";
import { TfiLinkedin } from "react-icons/tfi";
import { IoLogoYoutube } from "react-icons/io";

export const socialIcons: SocialIconProps[] = [
  {
    title: "instagram",
    icon: <BsInstagram />,
    url: "https://www.instagram.com/orangeliteracy/"
  },
  {
    title: "facebook",
    icon: <ImFacebook />,
    url: "https://www.facebook.com/orangeliteracy"
  },
  {
    title: "x",
    icon: <BsTwitterX />,
    url: "http://twitter.com/orangeliteracy"

  },
  {
    title: "linkedin",
    icon: <TfiLinkedin />,
    url: "https://www.linkedin.com/company/orange-county-literacy-council-inc/"
  },
  {
    title: "youtube",
    icon: <IoLogoYoutube />,
    url: "https://www.youtube.com/@orangeliteracy"
  }
]