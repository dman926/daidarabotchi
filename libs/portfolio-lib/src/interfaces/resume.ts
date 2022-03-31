interface Social {
  link: string;
  handle?: string;
  iconURI?: string;
  iconAlt?: string;
}

export interface ResumeHead {
  firstName: string;
  middleName?: string | string[];
  lastName: string;
  email: string;
  // set to number for now to discourage using strings
  // might change to a propper number string if I feel like it
  // doing that is easier for the dev to understand but requires more work to destructure
  phone: number;
  socials?: Social[];
  bio?: string;
}

export interface ResumeContent {
  title: string;
  images?: string | string[];
  shortDescriptionMD: string;
  longDescriptionMD: string;
  pointer?: string;
}

export interface ResumeFoot {
  bottomText?: string;
  socials?: Social[];
}

export interface Resume {
  head?: ResumeHead;
  content?: ResumeContent[];
  foot?: ResumeFoot;
}
