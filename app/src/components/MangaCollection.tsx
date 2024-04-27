import useMultipleManga from "@hooks/manga/useMultipleManga";
import MangaCollectionItem from "@components/MangaCollectionItem";
import LoadingProgress from "@components/miscellaneous/LoadingProgress";
import NotFound from "@components/page/NotFound";
import "./MangaCollection.scss";


const MangaCollection = () => {
  const items = useMultipleManga();

  if (items.isLoading) {
    return <LoadingProgress />;
  }

  if (!items.data || !Array.isArray(items.data) || items.data.length === 0) {
    return <NotFound />;
  }

  return (
    <div className="manga-collection">
      <div className="manga-collection-items">
        { items.data.map((item, index) => {
          return <MangaCollectionItem key={ index } item={ item } />
        }) }
      </div>
    </div>
  );
};

export default MangaCollection;
