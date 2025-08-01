import {
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
  Instagram,
  Interior,
  InteriorMobile,
  Location,
  Outdoor,
  OutdoorMobile,
  Twitter,
  Website,
  YouTube,
} from "../assets/images/svgs";

const SOCIALICONS =  [
  {
    name: "Facebook",
    key: "facebook",
    icon: Facebook,
  },
  {
    name: "YouTube",
    key: "youtube",
    icon: YouTube,
  },
  {
    name: "Instagram",
    key: "instagram",
    icon: Instagram,
  },
  {
    name: "Twitter",
    key: "twitter",
    icon: Twitter,
  },
];

const CONTACTDETAILS = [
  { icon: Email, key: "email" },
  { icon: Contact, key: "phone_number" },
  { icon: Website, key: "website" }, 
  { icon: Location, key: "address" },
];

const OURSOLUTIONS = [
  {
    icon: DoorWindow,
    iconMobile: DoorWindowMobile,
    details: "Doors and Windows",
  },
  {
    icon: Architectural,
    iconMobile: ArchitecturalMobile,
    details: "Architecture System",
  },
  { icon: Interior, iconMobile: InteriorMobile, details: "Interior Shading" },
  { icon: Outdoor, iconMobile: OutdoorMobile, details: "Outdoor Shading" },
  { icon: Acoustic, iconMobile: AcousticMobile, details: "Acoustic Solution" },
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
