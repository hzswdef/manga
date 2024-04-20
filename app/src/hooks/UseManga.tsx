import { useEffect, useState } from "react";
import MangaAPI from "../api/manga";
import { MangaType } from "../types/MangaType";

const staticFilesUrl = import.meta.env.VITE_STATIC_FILES_URL;

const useManga = (): MangaType => {
  const [manga, setManga] = useState<MangaType>({data: [], included: [], isLoading: true});
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    MangaAPI.getMangas()
      .then((data) => {
        data.data.map((item, index) => {
          data.data[index].thumbnail.uri.url = staticFilesUrl + item.thumbnail.uri.url
        })

        setManga(data);
        setIsLoading(false);
      });
    return () => {};
  }, []);

  return {
    ...manga,
    isLoading,
  };
}

export default useManga;
