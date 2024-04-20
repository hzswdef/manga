import useManga from "../hooks/UseManga";
import MangaCollectionItem from "./MangaCollectionItem";
import "./MangaCollection.scss";
import LoadingProgress from "./miscellaneous/LoadingProgress";


const MangaCollection = () => {
  const items = useManga();

  if (items.isLoading) {
    return <LoadingProgress />;
  }

  if (
    (items && Array.isArray(items) && items.length === 0)
    || (items.data && Array.isArray(items.data) && items.data.length === 0)
  ) {
    return (
      <span>
        No Results...
      </span>
    );
  }

  return (
    <div className="manga-collection">
      <div className="manga-collection-items">
        { items.data.map((item) => {
          return <MangaCollectionItem item={ item } />
        }) }
      </div>
    </div>
  );
};

export default MangaCollection;
