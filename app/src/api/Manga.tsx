import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {SingleManga, MultipleMangas, MangaItem} from "@interfaces/manga/Manga";
import {
  MangaChapterFrameItem,
  MangaChapterItem
} from "@interfaces/manga/MangaChapter";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
const staticFilesUrl = import.meta.env.VITE_STATIC_FILES_URL;

const instance = axios.create({
  baseURL: apiBaseUrl,
  timeout: 4000,
  params: {
    jsonapi_include: 1,
  },
});

const MangaAPI = {
  // Get single Manga item by ID.
  async getManga(id: string): Promise<SingleManga> {
    const config: AxiosRequestConfig = {
      params: {
        include: "thumbnail",
      },
    };
    return await instance
      .get(`/manga/${id}`, config)
      .then((response: AxiosResponse) => {
        const data: SingleManga = response.data;
        data.statusCode = response.status;

        if (!data.data) {
          return {
            statusCode: 404,
            isLoading: false,
          };
        }

        // Replace thumbnail relative URL with absolute URL.
        data.data.thumbnail.uri.url
          = staticFilesUrl + data.data.thumbnail.uri.url;

        return data;
      })
      .catch((response: AxiosResponse) => {
        return {
          statusCode: response.status,
          isLoading: false,
        };
      });
  },

  // Get multiple Manga items.
  async getMangas(): Promise<MultipleMangas> {
    const config: AxiosRequestConfig = {
      params: {
        include: "thumbnail",
      },
    };
    return await instance
      .get("/manga", config)
      .then((response: AxiosResponse) => {
        const data: MultipleMangas = response.data;
        data.statusCode = response.status;

        if (!data.data) {
          return {
            statusCode: 404,
            isLoading: false,
          };
        }

        // Replace thumbnails relative URL with absolute URL.
        data.data.map((item: MangaItem) => {
          item.thumbnail.uri.url
            = staticFilesUrl + item.thumbnail.uri.url;
        });

        return data;
      })
      .catch((response: AxiosResponse) => {
        return {
          statusCode: response.status,
          isLoading: false,
        };
      });
  },

  // Get Manga chapter by ID.
  async getMangaChapter(id: string): Promise<MangaChapterItem> {
    const config: AxiosRequestConfig = {
      params: {
        include: "frames.frame",
      },
    };
    return await instance
      .get(`/manga/manga_chapter/${id}`, config)
      .then((response: AxiosResponse) => {
        const data: MangaChapterItem = response.data;
        data.statusCode = response.status;

        if (!data.data) {
          return {
            statusCode: 404,
            isLoading: false,
          };
        }

        // Replace frames relative URL with absolute URL.
        data.data.frames.map((item: MangaChapterFrameItem) => {
          item.frame.uri.url
            = staticFilesUrl + item.frame.uri.url;
        });

        return data;
      })
      .catch((response: AxiosResponse) => {
        return {
          statusCode: response.status,
          isLoading: false,
        };
      });
  },
};

export default MangaAPI;
