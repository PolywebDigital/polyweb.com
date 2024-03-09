import BottomBar from "./BottomBar";
import TopBar from "./TopBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;
  return (
    <div className="flex flex-col">
      <TopBar />
      {children}
      <BottomBar />
    </div>
  );
};

export default Layout;
