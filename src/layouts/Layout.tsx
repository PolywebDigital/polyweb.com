import BottomBar from "./BottomBar";
import TopBar from "./TopBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <TopBar />
      {children}
      <BottomBar />
    </div>
  );
};

export default Layout;
