import Container from "../miscellaneous/Container";
import Logo from "../../assets/icons/logo.png";
import "./Header.scss"

const siteName = import.meta.env.VITE_SITE_NAME;

const Header = () => {
  return (
    <div className="header">
      <Container>

        <div className="logo">
          <img src={ Logo } alt={ document.title } />
          <span>
            { siteName }
          </span>
        </div>
      </Container>
    </div>
  );
};

export default Header;
