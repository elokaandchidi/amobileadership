export interface NewInfo {
  _id: string;
  title: string;
  publishedBy: string;
  publishedDate: string;
  imageUrl?: string;
  body: any[];
  _createdAt: string;
}

export interface NewDetailsInfo extends NewInfo {
  previous: NewInfo;
  next: NewInfo;
}

export interface TeamInfo {
  _id: string;
  fullname: string;
  body: string;
  imageUrl?: string;
  _createdAt: string;
}

interface SchoolInfo {
  name: string;
  imageUrl?: string;
}

export interface ParticipantInfo {
  _id: string;
  title: string;
  schools: SchoolInfo[];
  _createdAt: string;
}

export interface PrizeWinnerInfo {
  name: string;
  school: string;
  position: string;
  year?: string;
  imageUrl?: string;
}

export interface WinnerInfo {
  _id: string;
  year: string;
  prizewinners: PrizeWinnerInfo[];
  _createdAt: string;
}