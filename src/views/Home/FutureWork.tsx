import classNames from "classnames";
import imgEphochs from "../../assets/img/ephochs.png";

const FutureWork = () => {
  return (
    <div className={classNames({ "container mx-auto px-4 pt-4 pb-8": true })}>
      <div
        className={classNames({
          "font-bold text-center text-blue-500 uppercase": true,
        })}
      >
        THE FUTURE OF WORK
      </div>
      <div
        className={classNames({
          "mt-2 font-bold text-center text-3xl dark:text-blue-400 text-blue-900 capitalize":
            true,
        })}
      >
        Human Capital: On-Chained
      </div>
      <div
        className={classNames({
          "max-w-screen-md mx-auto mt-4 text-center text-base md:text-xl capitalize":
            true,
        })}
      >
        <p>Enter conditional resource allocation.</p>
        <p>
          By tying the value of conditional tokens to governance mechanisms,
          organizations can provide funding to individuals and teams that stays
          accountable to the community.
        </p>
        <p>
          This crucial unlock allows any digital organization, whether DAO or
          protocol, to act off-chain beyond the scope of its programming, but
          within the oversight of its governance.
        </p>
      </div>
    </div>
  );
};

export default FutureWork;
