export interface SingleManga {
  statusCode: number;
  data?: MangaItem;
  isLoading: boolean;
}

export interface MultipleMangas {
  statusCode: number;
  data?: MangaItem[];
  isLoading: boolean;
}

export interface MangaItem {
  id: string,
  title: string;
  alternative_titles: string[];
  description: string;
  release: number;
  manga_status: string;
  manga_type: string;
  chapters: {
    id: string;
  }[]
  thumbnail: {
    id: string;
    uri: {
      url: string;
    }
  }
}
