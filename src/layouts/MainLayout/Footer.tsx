import classNames from "classnames";

const Footer = () => {
  return (
    <div
      className={classNames({
        "bg-blue-900": true,
      })}
    >
      <div
        className={classNames({
          "container mx-auto px-4 py-4 text-gray-100": true,
        })}
      >
        Copyright 2021 Cambrian Protocal. Allright reserved
      </div>
    </div>
  );
};

export default Footer;
