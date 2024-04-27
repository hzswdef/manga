export interface MangaChapterItem {
  statusCode: number;
  data?: {
    id: string;
    frames: MangaChapterFrameItem[];
  }
  isLoading: boolean;
}

export interface MangaChapterFrameItem {
    id: string;
    frame: {
      id: string;
      uri: {
        url: string
      }
    }
}
