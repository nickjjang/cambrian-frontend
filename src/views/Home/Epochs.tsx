import classNames from "classnames";
import imgEphochs from "../../assets/img/ephochs.png";

const Ephochs = () => {
  return (
    <div className={classNames({ "container mx-auto px-4 pt-4 pb-8": true })}>
      <div
        className={classNames({
          "font-bold text-center text-blue-500 uppercase": true,
        })}
      >
        EPHOCHS
      </div>
      <div
        className={classNames({
          "mt-2 font-bold text-center text-3xl dark:text-blue-400 text-blue-900 capitalize":
            true,
        })}
      >
        Cambrian Timeline
      </div>
      <div
        className={classNames({
          "max-w-screen-md mx-auto mt-4 text-center text-base md:text-xl capitalize":
            true,
        })}
      >
        Cambrian Protocol is taking the first steps to unlocking the potential
        of digital organizations, building the future of work, and exiting to
        the community.
      </div>
      <img src={imgEphochs} alt="Ephochs" />
    </div>
  );
};

export default Ephochs;
