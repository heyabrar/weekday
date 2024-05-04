interface IJobDetails {
  jdUid: string;
  jdLink: string;
  jobDetailsFromCompany: string;
  maxJdSalary: number;
  minJdSalary?: number | null; // optional property
  salaryCurrencyCode: string;
  location: string;
  minExp: number;
  maxExp: number;
  jobRole: string;
  companyName: string;
  logoUrl: string;
}

interface IAllFilters {
  role: string;
  experience: number;
  minSalary: number;
  search: string;
}

export type { IJobDetails, IAllFilters };
