export interface MangaType {
  data: MangaItemType[];
  included: [];
  isLoading: boolean;
}

export interface MangaItemType {
  id: string,
  title: string;
  alternative_titles: string[];
  description: string;
  release: number;
  manga_status: string;
  manga_type: string;
  chapters: {
    data: MangaItemChapterType[]
  }
  thumbnail: {
    id: string;
    uri: {
      url: string;
    }
  }
}

interface MangaItemChapterType {

}
