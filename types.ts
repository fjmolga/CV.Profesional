export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  cuit: string;
  age: string;
  status: string;
  linkedin?: string;
  github?: string;
}

export interface Job {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  university: string;
  period: string;
}

export interface Certificate {
  name: string;
  institution: string;
  date: string;
  url: string;
}

export interface Skills {
  [key: string]: string[];
}

export interface CvData {
  name: string;
  role: string;
  contact: ContactInfo;
  summary: string;
  experience: Job[];
  education: Education[];
  skills: Skills;
  languages: { lang: string; level: string }[];
  certificates: Certificate[];
}