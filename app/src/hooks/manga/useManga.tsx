import { useEffect, useState } from "react";
import MangaAPI from "@api/Manga";
import { SingleManga } from "@interfaces/manga/Manga";

const useManga = (id: string): SingleManga => {
  const [manga, setManga] = useState<SingleManga>(Object);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  manga.isLoading = isLoading;

  useEffect(() => {
    MangaAPI.getManga(id)
      .then((response) => {
        setManga(response);
        setIsLoading(false);
      });
  }, [id]);

  const test = 0;




  return manga;
}

export default useManga;
