import { Link } from "react-router-dom";
import Container from "../miscellaneous/Container";
import "./Footer.scss"

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <span>
          Manga website build with React & Drupal for dev stack learning purposes.
        </span>

        <Link to="https://github.com/hzswdef/manga" target="_blank" rel="noopener noreferrer">
          GitHub
        </Link>
      </Container>
    </div>
  );
};

export default Footer;
