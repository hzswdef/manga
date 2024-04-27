import { useEffect, useState } from "react";
import MangaAPI from "@api/Manga";
import { MangaChapterItem } from "@interfaces/manga/MangaChapter";

const useMangaChapter = (id: string): MangaChapterItem => {
  const [chapter, setChapter] = useState<MangaChapterItem>(Object);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  chapter.isLoading = isLoading;

  useEffect(() => {
    MangaAPI.getMangaChapter(id)
      .then((response) => {
        setChapter(response);
        setIsLoading(false);
      });
  }, [id, chapter]);

  return chapter;
}

export default useMangaChapter;
