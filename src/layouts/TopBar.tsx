import { useNavigate } from "react-router-dom";
import Button from "../components/Buttons";
import { paths } from "../constants/Paths";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer } from "@mui/material";
import { useState } from "react";

type Link = {
  path: string;
  text: string;
  color: "default" | "dark";
};

const TopBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const links: Link[] = [
    { path: paths.home, text: "Accueil", color: "default" },
    { path: paths.ourTeam, text: "Notre équipe", color: "default" },
    // { path: paths.ourMethodology, text: "Notre méthodologie", color: "default" },
    // { path: paths.pricing, text: "Tarification", color: "default" },
    { path: paths.appointment, text: "Prendre rendez-vous", color: "dark" },
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
          {links.map((link) => (
            <Button color={link.color} onClick={() => navigate(link.path)}>
              {link.text}
            </Button>
          ))}
        </div>
        <img src="logo.png" className="max-w-60" alt="logo" />
      </Drawer>
      <div className="flex justify-between w-full items-center px-[5%] md:px-[10%] lg:px-[15%] xl:px-[20%] py-6">
        <img src="logo.png" className="max-w-60" alt="logo" />
        <ul className="hidden sm:flex items-center md:gap-2">
          {links.map((link) => (
            <li>
              <Button color={link.color} onClick={() => navigate(link.path)}>
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
