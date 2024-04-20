import "./MangaCollectionItem.scss";
import { MangaItemType } from "../types/MangaType.tsx";
import { Link } from "react-router-dom";

type MangaCollectionItemProps = {
  item: MangaItemType;
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
