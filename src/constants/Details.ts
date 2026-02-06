import {
  automation,
  automationMobile,
  Acoustic,
  AcousticMobile,
  Architectural,
  ArchitecturalMobile,
  Contact,
  DoorWindow,
  DoorWindowMobile,
  Email,
  EmployeeAbout,
  EmployeeAboutDisabled,
  EmployeeCompanyProfilDisabled,
  EmployeeCompanyProfile,
  Facebook,
  Twitter,
  Instagram,
  Interior,
  InteriorMobile,
  landlineB,
  LinkedIn,
  locationB,
  mailB,
  Outdoor,
  OutdoorMobile,
  phoneB,
  websiteB,
  YouTube,
} from "../assets/images/svgs";

const SOCIALICONS = [
  {
    name: "Facebook",
    key: "facebook",
    icon: Facebook,
    image:
      "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg",
    color: "#1877f2",
  },
  {
    name: "Instagram",
    key: "instagram",
    icon: Instagram,
    image:
      "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg",
    color: "#e1306c",
  },
  {
    name: "linkedin",
    key: "linkedin",
    icon: LinkedIn,
    image:
      "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg",
    color: "",
  },
  {
    name: "YouTube",
    key: "youtube",
    icon: YouTube,
    image:
      "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg",
    color: "#ff0000",
  },
];

const CONTACTDETAILS = [
  { icon: mailB, key: "email" },
  { icon: phoneB, key: "phone_number" },
  { icon: landlineB, key: "landline" },
  { icon: websiteB, key: "website" },
  { icon: locationB, key: "address" },
];

const OURSOLUTIONS = [
  {
    icon: DoorWindow,
    iconMobile: DoorWindowMobile,
    details: "Doors and Windows",
    link: "https://www.eurosystems.com/doors-and-windows"
  },
  {
    icon: Architectural,
    iconMobile: ArchitecturalMobile,
    details: "Architectural Glazing Solutions",
    link: "https://www.eurosystems.com/architectural-glazing"
  },
  { icon: Interior, iconMobile: InteriorMobile, details: "Interior Shading", link: "https://www.eurosystems.com/interior-shading" },
  { icon: Outdoor, iconMobile: OutdoorMobile, details: "Outdoor Shading", link: "https://www.eurosystems.com/outdoor-shading" },
  { icon: Acoustic, iconMobile: AcousticMobile, details: "Acoustic Solutions", link: "https://www.eurosystems.com/acoustic-solutions" },
  { icon: automation, iconMobile: automationMobile, details: "Smart Automation Solutions", link: "https://www.eurosystems.com/smart-automation" },
];

const SWITCHBUTTONS = {
  about: {
    activeIcon: EmployeeAbout,
    inActiveIcon: EmployeeAboutDisabled,
    title: "About",
  },
  company: {
    activeIcon: EmployeeCompanyProfile,
    inActiveIcon: EmployeeCompanyProfilDisabled,
    title: "Company Profile",
  },
};

const PARTNERS = ["uk", "uae", "qatar", "ksa"];
const COMPANY = "About Company";
const ABOUT = "About Me";
const OURSOLUTION = "Our Solution";
const VIEW = "Visit Site";

export {
  SOCIALICONS,
  CONTACTDETAILS,
  OURSOLUTIONS,
  SWITCHBUTTONS,
  PARTNERS,
  COMPANY,
  ABOUT,
  OURSOLUTION,
  VIEW,
};
