import classnames from "classnames";
import Footer from "./Footer";
import Header from "./Header";

export interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps): React.ReactElement => {
  return (
    <div
      className={classnames({
        "main-layout text-gray-800 dark:text-gray-100": true,
      })}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
