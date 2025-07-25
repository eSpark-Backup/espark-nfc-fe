import {
  Acoustic,
  Architectural,
  Contact,
  DoorWindow,
  Email,
  EmployeeAbout,
  EmployeeAboutDisabled,
  EmployeeCompanyProfilDisabled,
  EmployeeCompanyProfile,
  Facebook,
  Instagram,
  Interior,
  Location,
  Outdoor,
  Twitter,
  Website,
  YouTube,
} from "../assets/images/svgs";

const SOCIALICONS = [
  {
    name: "Facebook",
    icon: Facebook,
  },
  {
    name: "YouTube",
    icon: YouTube,
  },
  {
    name: "Instagram",
    icon: Instagram,
  },
  {
    name: "Twitter",
    icon: Twitter,
  },
];

const CONTACTDETAILS = [
  { icon: Email, details: "Infoexiondigi@gmail.com" },
  { icon: Contact, details: "+94786526533" },
  { icon: Website, details: "www.exiondigi.uk" },
  { icon: Location, details: "170 Williams Steet New Yourk, NY 10038-78 212-" },
];

const OURSOLUTIONS = [
  { icon: DoorWindow, details: "Doors and Windows" },
  { icon: Architectural, details: "Architecture System" },
  { icon: Interior, details: "Interior Shading" },
  { icon: Outdoor, details: "Outdoor Shading" },
  { icon: Acoustic, details: "Acoustic Solution" },
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
const VIEW = "View Website";

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
