import { Link } from "react-router-dom";
import Container from "../miscellaneous/Container";
import Logo from "../../assets/icons/logo.png";
import "./Header.scss"

const siteName = import.meta.env.VITE_SITE_NAME;

const Header = () => {
  return (
    <div className="header">
      <Container>
        <Link to="/" className="logo">
          <img src={ Logo } alt={ document.title } />
          <span>
            { siteName }
          </span>
        </Link>
      </Container>
    </div>
  );
};

export default Header;
