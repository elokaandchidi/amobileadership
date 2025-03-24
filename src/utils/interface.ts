export interface NewInfo {
  _id: string;
  title: string;
  publishedBy: string;
  publishedDate: string;
  imageUrl?: string;
  body: any[];
  _createdAt: string;
}

export interface TeamInfo {
  _id: string;
  fullname: string;
  body: string;
  imageUrl?: string;
  _createdAt: string;
}

export interface NewDetailsInfo extends NewInfo {
  previous: NewInfo;
  next: NewInfo;
}