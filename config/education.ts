export interface EducationInterface {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: Date;
  endDate: Date;
  eqfLevel: number;
}

export const education: EducationInterface[] = [
  {
    id: "engineering-degree",
    degree: "Engineering Degree in Computer Science – Software Engineering",
    institution: "Polytechnic School of Engineering and Technology",
    location: "Sousse, Tunisia",
    startDate: new Date("2021-09-01"),
    endDate: new Date("2024-07-31"),
    eqfLevel: 7,
  },
  {
    id: "applied-bachelor",
    degree:
      "Applied Bachelor's Degree in Computer Science – Information Technology",
    institution: "Higher Institute of Technological Studies",
    location: "Mahdia, Tunisia",
    startDate: new Date("2017-09-01"),
    endDate: new Date("2021-07-31"),
    eqfLevel: 6,
  },
];

export interface CertificationInterface {
  id: string;
  name: string;
  issuer: string;
  image: string;
}

export const certifications: CertificationInterface[] = [
  {
    id: "sfpc",
    name: "Scrum Foundation Certification (SFPC)",
    issuer: "CertiProf",
    image: "/scrum.jpeg",
  },
  {
    id: "ccna",
    name: "Cisco CCNA Certification",
    issuer: "Cisco",
    image: "/cisco.png",
  },
  {
    id: "acpc",
    name: "ACPC Certificate of Achievement",
    issuer: "ACPC",
    image: "/acpc.jpeg",
  },
];
