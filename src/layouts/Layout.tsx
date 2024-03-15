import BottomBar from "./BottomBar";
import TopBar from "./TopBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;
  return (
    <div className="flex flex-col overflow-clip gap-16 md:gap-40  min-h-screen justify-between">
      <TopBar />
      {children}
      <BottomBar />
    </div>
  );
};

export default Layout;
