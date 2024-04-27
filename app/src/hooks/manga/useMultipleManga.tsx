import { useEffect, useState } from "react";
import MangaAPI from "@api/Manga";
import { MultipleMangas } from "@interfaces/manga/Manga";

const useMultipleManga = (): MultipleMangas => {
  const [manga, setManga] = useState<MultipleMangas>(Object);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  manga.isLoading = isLoading;

  useEffect(() => {
    MangaAPI.getMangas()
      .then((response) => {
        setManga(response);
        setIsLoading(false);
      });
  }, [manga]);

  return manga;
}

export default useMultipleManga;
