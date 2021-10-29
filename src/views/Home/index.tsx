import classNames from "classnames";
import Ephochs from "./Epochs";
import FutureWork from "./FutureWork";

const Home = () => {
  return (
    <div
      className={classNames({
        "text-gray-800 dark:text-gray-100": true,
      })}
    >
      <FutureWork />
      <Ephochs />
    </div>
  );
};

export default Home;
