import useTitle from "../../hooks/UseTitle.tsx";

const HomePage = () => {
  useTitle("Home");

  return (
    <div className="homepage">
      hello world!
    </div>
  );
};

export default HomePage;
