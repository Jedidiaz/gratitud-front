export interface ResponseI {
  name?: string;
  message?: string;
  error?: Error;
  response: string;
  token?: string;
  ok?: boolean;
  status?: number;
  statusText?: string;
  url?: string;
  isAdmin?: boolean;
}

export interface Error {
  message: string;
}

export interface CreatorModel {
  createdAt: string;
  description: string;
  email: string;
  isActive: boolean;
  isAdmin: boolean;
  isPro: boolean;
  money: number;
  name: string;
  password: string;
  username: string;
  profesion: string;
  tiktok: string;
  titulo: string;
  facebook: string;
  imgpro: imageProModel;
  instagram: string;
  __v: number;
  _id: string;
}

export interface ResponseInfoModel {
  message: MessagesModel[];
  user: CreatorModel;
}

interface imageProModel {
  fileName: string
  filePath: string
  fileSize: string
  fileType: string
}

export interface MessagesModel {
  description: string;
  email: string;
  name: string;
  nameUser: string;
  title: string;
  __v: number;
  _id: string;
  id?: number
}
