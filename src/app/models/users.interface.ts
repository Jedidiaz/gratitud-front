export interface ResponseI {
  name?: string;
  message?: string;
  response: string;
  token?: string;
  ok?: boolean;
  status?: number;
  statusText?: string;
  url?: string;
  isAdmin?: boolean;
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
  error?: string
  response: string
}

export interface imageProModel {
  fileName: string
  filePath: string
  fileSize: string
  fileType: string
}

export interface MessagesModel {
  description: string;
  email: string;
  name: string;
  emailUser: string;
  title: string;
  img: imageProModel
  __v: number;
  _id: string;
  id?: number
}

export interface ResponseMessageModel {
  data?: MessagesModel
  response: string
  user?: string
  message?: string
}

export interface CreatorsAdminModel {
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
  id?: number
}

export interface withdrawAdminModel{
  _id: string
  name: string
  email: string
  monto: number
  __v: number
  createdAt: string
  statusTransaction: string
  emailUser: string
  id?: number
}

export interface ResponseGetAdmin{
  response: string
  message?: string;
  data: CreatorsAdminModel[]
  data1?: withdrawAdminModel[]
}

