import { ReactNode } from "react";
import Header from "./region/Header";
import Footer from "./region/Footer";
import Container from "./miscellaneous/Container";
import "./Base.scss";

type Props = {
  children: ReactNode
}

const Base = (props: Props) => {
  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <Container>
          {props.children}
        </Container>
      </div>
      <Footer/>
    </div>
  );
};

export default Base;
