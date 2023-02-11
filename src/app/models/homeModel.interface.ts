export interface ResponseHomeUsersModel {
  response: string;
  data: DataModelInterface[];
  datam: Array<any>[];
}

export interface DataModelInterface {
  imgpro: { filePath: string };
  name: string;
  titulo: string;
  username: string;
  _id: string;
  num: any;
  profesion: string;
}

export interface responseGetInfoHomeModel {
  response: string;
  data: dataInfoHomeModel;
}

export interface dataInfoHomeModel {
  image: {
    fileName: string;
    filePath: string;
    fileType: string;
    fileSize: number;
  };
  _id: string;
  __v: number;
  subtituloh2: string;
  subtituloh3: string;
  texto1: string;
  texto2: string;
  texto3: string;
  tituloh1: string;
}
