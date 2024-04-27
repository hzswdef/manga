import {useParams} from "react-router-dom";
import useManga from "@hooks/manga/useManga";
import LoadingProgress from "@components/miscellaneous/LoadingProgress";
import NotFound from "@components/page/NotFound";
import "./MangaPage.scss";

const MangaPage = () => {
  const {id} = useParams();

  const item = useManga(id ?? '');

  if (item.isLoading) {
    return <LoadingProgress />;
  }

  if (item.statusCode !== 200) {
    return <NotFound />;
  }

  // If item not exist at all.
  if (!item.data || !Object.keys(item.data).length) {
    return <NotFound />;
  }

  const data = item.data;

  return (
    <div className="manga-page">
      <h1 className="manga-title mobile-only">
        {data.title}
      </h1>
      <div className="manga-page-section-left">
        <div className="description-block">
          <h1 className="manga-title">
            {data.title}
          </h1>
          <div className="manga-description-fields">
            {data.alternative_titles && (
              <div className="field alternative-titles">
                <div className="field-label">
                  Alternative Titles
                </div>
                <div className="field-value">
                  {data.alternative_titles.map((alternative_title, index) => {
                    return <p key={index}>{alternative_title}</p>
                  })}
                </div>
              </div>
            )}

            <div className="field release">
              <div className="field-label">
                Release
              </div>
              <div className="field-value">
                {data.release}
              </div>
            </div>

            <div className="field status">
              <div className="field-label">
                Status
              </div>
              <div className="field-value">
                {data.manga_status}
              </div>
            </div>

            <div className="field type">
              <div className="field-label">
                Type
              </div>
              <div className="field-value">
                {data.manga_type}
              </div>
            </div>
          </div>

          <div className="manga-chapters">

          </div>
        </div>
      </div>
      <div className="manga-page-section-right">
        <div className="manga-thumbnail">
          <img src={data.thumbnail.uri.url} alt={data.title}/>
        </div>
      </div>
    </div>
  );
};

export default MangaPage;
