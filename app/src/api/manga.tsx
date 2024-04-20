import axios, { AxiosResponse } from 'axios';
import { MangaType } from "../types/MangaType";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const instance = axios.create({
  baseURL: apiBaseUrl,
  timeout: 4000,
});

const MangaAPI = {
  // getManga: (): Promise<MangaType[]> => requests.get("/manga?filter[manga.id]=UUID&include=thumbnail"),
  getMangas: async (): Promise<MangaType> => {
    const response : AxiosResponse = await instance.get("/manga?include=thumbnail&jsonapi_include=1");
    return response.data;
  },
};

export default MangaAPI;
