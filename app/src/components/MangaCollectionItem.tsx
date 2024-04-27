import { Link } from "react-router-dom";
import { MangaItem } from "@interfaces/manga/Manga";
import "./MangaCollectionItem.scss";

type MangaCollectionItemProps = {
  item: MangaItem;
}

const MangaCollectionItem = (props: MangaCollectionItemProps) =>
  <Link to={ "manga/" + props.item.id } className="manga-collection-item">
    <div className="manga-item">
      <div className="manga-item-thumbnail">
        <img src={ props.item.thumbnail.uri.url } alt={ props.item.title } />
      </div>
      <div className="manga-item-title">
        <span>
          { props.item.title }
        </span>
      </div>
    </div>
  </Link>

export default MangaCollectionItem;
