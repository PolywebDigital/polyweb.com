import {} from "react-router-dom";
import { Button } from "../components/ui/button";
import { paths } from "../constants/Paths";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer } from "@mui/material";
import { useState } from "react";
import { useCustomNavigation } from "../lib/useCustomNavigation";

type Link = {
  path: string;
  text: string;
  color: "default" | "dark";
  index: number;
};

const TopBar: React.FC = () => {
  const { navigateTo } = useCustomNavigation();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const links: Link[] = [
    { path: paths.home, text: "Accueil", color: "default", index: 0 },
    { path: paths.ourTeam, text: "Notre équipe", color: "default", index: 1 },
    // { path: paths.ourMethodology, text: "Notre méthodologie", color: "default" },
    // { path: paths.pricing, text: "Tarification", color: "default" },
    {
      path: paths.appointment,
      text: "Prendre rendez-vous",
      color: "dark",
      index: 2,
    },
  ];

  return (
    <>
      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        PaperProps={{
          sx: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "60%",
            justifyContent: "space-between",
            paddingY: "24px",
          },
        }}
      >
        <div className="flex flex-col items-center">
          {links.map((link, index) => (
            <Button
              key={index}
              buttonType={link.color}
              onClick={() => {
                navigateTo(link.index);
                setIsMenuOpen(false);
              }}
            >
              {link.text}
            </Button>
          ))}
        </div>
        <img src="logo.png" className="max-w-60" alt="logo" />
      </Drawer>
      <div className="flex justify-between w-full items-center px-[2%] md:px-[5%] lg:px-[15%] xl:px-[20%] py-6">
        <img src="logo.png" className="w-[80%] max-w-60" alt="logo" />
        <ul className="hidden sm:flex items-center">
          {links.map((link, index) => (
            <li key={index}>
              <Button
                buttonType={link.color}
                onClick={() => {
                  navigateTo(link.index);
                  setIsMenuOpen(false);
                }}
              >
                {link.text}
              </Button>
            </li>
          ))}
        </ul>
        <Button className="block sm:hidden" onClick={() => setIsMenuOpen(true)}>
          <MenuIcon width={16} />
        </Button>
      </div>
    </>
  );
};

export default TopBar;
