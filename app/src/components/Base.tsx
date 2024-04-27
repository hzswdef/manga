import { ReactNode } from "react";
import Header from "@components/region/Header";
import Footer from "@components/region/Footer";
import Container from "@components/miscellaneous/Container";
import "./Base.scss";

interface Props {
  children: ReactNode;
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
