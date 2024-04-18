import { ReactNode } from "react";
import "./Container.scss"

type Props = {
  children: ReactNode
}

const Container = (props: Props) => {
  return (
    <div className="container">
      {props.children}
    </div>
  );
};

export default Container;
